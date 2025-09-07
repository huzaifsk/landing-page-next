const fs = require("fs");
const path = require("path");

function replaceImages() {
  console.log(
    "🔄 Replacing original images with those from public/optimized...\n"
  );

  const publicDir = path.join(__dirname, "../public");
  const optimizedDir = path.join(publicDir, "optimized");

  // Get all images in public/optimized (the replacements)
  const replacedFiles = fs
    .readdirSync(optimizedDir)
    .filter(
      (file) => /\.(png|jpg|jpeg)$/i.test(file) && !file.includes(".webp")
    );

  let replacedCount = 0;
  let totalSpaceSaved = 0;

  console.log(
    `📸 Found ${replacedFiles.length} images in public/optimized to use as replacements\n`
  );

  for (const file of replacedFiles) {
    const originalPath = path.join(publicDir, file);
    const replacementPath = path.join(optimizedDir, file);

    if (fs.existsSync(originalPath) && fs.existsSync(replacementPath)) {
      const originalStats = fs.statSync(originalPath);
      const replacementStats = fs.statSync(replacementPath);

      const originalSize = originalStats.size;
      const replacementSize = replacementStats.size;
      const spaceSaved = originalSize - replacementSize;

      // Backup original (optional)
      const backupPath = path.join(publicDir, "backup", file);
      if (!fs.existsSync(path.dirname(backupPath))) {
        fs.mkdirSync(path.dirname(backupPath), { recursive: true });
      }
      fs.copyFileSync(originalPath, backupPath);

      // Replace with the image from public/optimized
      fs.copyFileSync(replacementPath, originalPath);

      totalSpaceSaved += spaceSaved;
      replacedCount++;

      console.log(
        `✅ ${file}: ${(originalSize / 1024).toFixed(1)} KB → ${(
          replacementSize / 1024
        ).toFixed(1)} KB (${(spaceSaved / 1024).toFixed(1)} KB saved)`
      );
    }
  }

  console.log(`\n📊 REPLACEMENT SUMMARY:`);
  console.log(`Images replaced: ${replacedCount}`);
  console.log(
    `Total space saved: ${(totalSpaceSaved / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(`Original images backed up to: public/backup/`);
  console.log(
    `\n✅ All images have been replaced with those from public/optimized!`
  );
}

replaceImages();
