const sharp = require('sharp');
const fs = require('fs');
const inPath = './public/logomfb.png';
const outPath = './public/logomfb.webp';

if (!fs.existsSync(inPath)) {
  console.error('Input file not found:', inPath);
  process.exit(1);
}

sharp(inPath)
  .webp({ quality: 80 })
  .toFile(outPath)
  .then(() => console.log('Converted to', outPath))
  .catch((err) => {
    console.error('Conversion error', err);
    process.exit(1);
  });
