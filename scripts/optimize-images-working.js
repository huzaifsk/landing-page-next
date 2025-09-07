const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Check if sharp is available, if not install it
function ensureSharp() {
  try {
    require("sharp");
    console.log("✅ Sharp is available");
  } catch (error) {
    console.log("📦 Installing sharp for image optimization...");
    try {
      execSync("npm install sharp", { stdio: "inherit" });
      console.log("✅ Sharp installed successfully");
    } catch (installError) {
      console.error("❌ Failed to install sharp:", installError.message);
      return false;
    }
  }
  return true;
}

async function optimizeImages() {
  console.log("🖼️  Starting image optimization...\n");

  if (!ensureSharp()) {
    console.log(
      "❌ Cannot proceed without sharp. Please install it manually: npm install sharp"
    );
    return;
  }

  const sharp = require("sharp");
  const publicDir = path.join(__dirname, "../public");
  const optimizedDir = path.join(__dirname, "../public/optimized");

  // Create optimized directory
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  // Get all image files
  const files = fs
    .readdirSync(publicDir)
    .filter((file) => /\.(png|jpg|jpeg)$/i.test(file));

  console.log(`📸 Found ${files.length} images to optimize\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const results = [];

  for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(optimizedDir, file);
    const webpPath = path.join(
      optimizedDir,
      file.replace(/\.(png|jpg|jpeg)$/i, ".webp")
    );

    try {
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;
      totalOriginalSize += originalSize;

      console.log(
        `🔄 Processing: ${file} (${(originalSize / 1024).toFixed(1)} KB)`
      );

      // Get image info
      const imageInfo = await sharp(inputPath).metadata();
      const { width, height, format } = imageInfo;

      // Determine optimal settings based on image type and size
      let sharpInstance = sharp(inputPath);

      if (format === "png") {
        // For PNGs, convert to JPEG with high quality for better compression
        sharpInstance = sharpInstance
          .jpeg({ quality: 85, progressive: true })
          .resize(width > 2000 ? 2000 : width, height > 2000 ? 2000 : height, {
            fit: "inside",
            withoutEnlargement: true,
          });
      } else if (format === "jpeg" || format === "jpg") {
        // For JPEGs, optimize quality and resize if too large
        sharpInstance = sharpInstance
          .jpeg({ quality: 80, progressive: true })
          .resize(width > 2000 ? 2000 : width, height > 2000 ? 2000 : height, {
            fit: "inside",
            withoutEnlargement: true,
          });
      }

      // Save optimized version
      await sharpInstance.toFile(outputPath);

      // Create WebP version
      await sharp(inputPath)
        .resize(width > 2000 ? 2000 : width, height > 2000 ? 2000 : height, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 80 })
        .toFile(webpPath);

      const optimizedStats = fs.statSync(outputPath);
      const webpStats = fs.statSync(webpPath);
      const optimizedSize = optimizedStats.size;
      const webpSize = webpStats.size;

      totalOptimizedSize += Math.min(optimizedSize, webpSize);

      const reduction =
        ((originalSize - Math.min(optimizedSize, webpSize)) / originalSize) *
        100;

      results.push({
        file,
        original: originalSize,
        optimized: optimizedSize,
        webp: webpSize,
        reduction: reduction,
      });

      console.log(`  ✅ Optimized: ${(optimizedSize / 1024).toFixed(1)} KB`);
      console.log(`  ✅ WebP: ${(webpSize / 1024).toFixed(1)} KB`);
      console.log(`  📉 Reduction: ${reduction.toFixed(1)}%\n`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  // Summary
  console.log("📊 OPTIMIZATION SUMMARY");
  console.log("=======================");
  console.log(`Total images processed: ${results.length}`);
  console.log(
    `Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Optimized total size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Total space saved: ${(
      (totalOriginalSize - totalOptimizedSize) /
      1024 /
      1024
    ).toFixed(2)} MB`
  );
  console.log(
    `Overall reduction: ${(
      ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) *
      100
    ).toFixed(1)}%\n`
  );

  // Top savings
  const topSavings = results
    .sort((a, b) => b.reduction - a.reduction)
    .slice(0, 5);

  console.log("🏆 TOP 5 SPACE SAVERS:");
  topSavings.forEach((result, index) => {
    console.log(
      `${index + 1}. ${result.file}: ${result.reduction.toFixed(1)}% reduction`
    );
  });

  console.log(`\n📁 Optimized images saved to: ${optimizedDir}`);
  console.log("💡 Next steps:");
  console.log("1. Review the optimized images");
  console.log("2. Update your components to use the optimized versions");
  console.log("3. Consider using WebP format for modern browsers");
}

optimizeImages().catch(console.error);
