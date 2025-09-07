const fs = require("fs");
const path = require("path");

function moveOptimizedToPublic() {
  console.log("🔄 Moving all optimized images to main public directory...\n");

  const publicDir = path.join(__dirname, "../public");
  const optimizedDir = path.join(publicDir, "optimized");

  if (!fs.existsSync(optimizedDir)) {
    console.log("❌ Optimized directory not found!");
    return;
  }

  // Get all files from optimized directory
  const optimizedFiles = fs.readdirSync(optimizedDir);

  console.log(
    `📸 Found ${optimizedFiles.length} files in optimized directory\n`
  );

  let movedCount = 0;
  let totalSpaceSaved = 0;

  for (const file of optimizedFiles) {
    const sourcePath = path.join(optimizedDir, file);
    const targetPath = path.join(publicDir, file);

    try {
      // Check if target already exists
      if (fs.existsSync(targetPath)) {
        const sourceStats = fs.statSync(sourcePath);
        const targetStats = fs.statSync(targetPath);

        // Only replace if source is smaller (optimized)
        if (sourceStats.size < targetStats.size) {
          const spaceSaved = targetStats.size - sourceStats.size;
          totalSpaceSaved += spaceSaved;

          // Backup original
          const backupPath = path.join(publicDir, "backup", file);
          if (!fs.existsSync(path.dirname(backupPath))) {
            fs.mkdirSync(path.dirname(backupPath), { recursive: true });
          }
          fs.copyFileSync(targetPath, backupPath);

          // Replace with optimized version
          fs.copyFileSync(sourcePath, targetPath);

          console.log(
            `✅ ${file}: ${(targetStats.size / 1024).toFixed(1)} KB → ${(
              sourceStats.size / 1024
            ).toFixed(1)} KB (${(spaceSaved / 1024).toFixed(1)} KB saved)`
          );
          movedCount++;
        } else {
          console.log(`⏭️  ${file}: Already optimized or same size`);
        }
      } else {
        // File doesn't exist in public, just copy it
        fs.copyFileSync(sourcePath, targetPath);
        const stats = fs.statSync(sourcePath);
        console.log(
          `📁 ${file}: ${(stats.size / 1024).toFixed(1)} KB (new file)`
        );
        movedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n📊 MOVE SUMMARY:`);
  console.log(`Files processed: ${optimizedFiles.length}`);
  console.log(`Files moved/updated: ${movedCount}`);
  console.log(
    `Total space saved: ${(totalSpaceSaved / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `\n✅ All optimized images are now in the main public directory!`
  );
  console.log(`💡 Original files backed up to: public/backup/`);
}

moveOptimizedToPublic();
