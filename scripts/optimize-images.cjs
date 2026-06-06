const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIR = path.join(__dirname, '../public/Gitanjali Narnolia cricket leauge(2026)');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let processed = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      try {
        const originalSize = stat.size;
        // Temporary output file to avoid reading/writing to the same file simultaneously
        const tempPath = filePath + '.temp.jpg';
        
        await sharp(filePath)
          .resize(1920, 1920, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ quality: 80, progressive: true })
          .toFile(tempPath);
        
        const newSize = fs.statSync(tempPath).size;
        totalSavedBytes += (originalSize - newSize);
        
        // Replace original with optimized version
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        processed++;
        console.log(`[${processed}] Optimized: ${file} | Saved: ${Math.round((originalSize - newSize) / 1024 / 1024 * 100) / 100} MB`);
      } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
      }
    }
  }
  
  if (dir === TARGET_DIR) {
    console.log(`\n✅ Finished! Processed ${processed} images.`);
    console.log(`🎉 Total space saved: ${Math.round(totalSavedBytes / 1024 / 1024)} MB!`);
  }
}

console.log('Starting image optimization...');
processDirectory(TARGET_DIR);
