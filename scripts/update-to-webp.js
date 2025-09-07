const fs = require("fs");
const path = require("path");

function updateToWebP() {
  console.log("🌐 Updating components to use WebP format...\n");

  const srcDir = path.join(__dirname, "../src");

  // Find all TypeScript/JavaScript files
  function findFiles(dir, extensions = [".tsx", ".ts", ".js", ".jsx"]) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules"
      ) {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (extensions.some((ext) => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }

    return files;
  }

  const files = findFiles(srcDir);
  let updatedFiles = 0;
  let totalReplacements = 0;

  console.log(`📁 Found ${files.length} files to check\n`);

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    let fileUpdated = false;
    let fileReplacements = 0;

    // Pattern to match image references in src attributes
    const imagePatterns = [
      // Direct src references
      /src=["']([^"']*\.(png|jpg|jpeg))["']/gi,
      // Next.js Image src
      /src=\{([^}]*\.(png|jpg|jpeg))\}/gi,
      // Template literals
      /src=\{`([^`]*\.(png|jpg|jpeg))`\}/gi,
    ];

    for (const pattern of imagePatterns) {
      content = content.replace(pattern, (match, imagePath) => {
        // Convert to WebP
        const webpPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

        // Check if WebP version exists
        const webpFullPath = path.join(__dirname, "../public", webpPath);
        if (fs.existsSync(webpFullPath)) {
          fileUpdated = true;
          fileReplacements++;
          console.log(
            `  🔄 ${path.basename(file)}: ${imagePath} → ${webpPath}`
          );
          return match.replace(imagePath, webpPath);
        }
        return match;
      });
    }

    if (fileUpdated) {
      fs.writeFileSync(file, content);
      updatedFiles++;
      totalReplacements += fileReplacements;
    }
  }

  console.log(`\n📊 WEBP UPDATE SUMMARY:`);
  console.log(`Files updated: ${updatedFiles}`);
  console.log(`Total image references updated: ${totalReplacements}`);
  console.log(`\n✅ Components updated to use WebP format!`);
  console.log(`💡 WebP provides 25-35% better compression than JPEG/PNG`);
}

updateToWebP();
