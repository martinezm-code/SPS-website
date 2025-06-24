const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');

(async () => {
  const inputDir = path.join(__dirname, 'src/images/webp');
  const outputDir = path.join(__dirname, 'src/images/webp');

  await imagemin([
    `${inputDir}/*.jpg`,
    `${inputDir}/*.jpeg`,
    `${inputDir}/*.png`
  ], {
    destination: outputDir,
    plugins: [
      imageminWebp({
        quality: 80
      })
    ]
  });

  console.log('Images compressed and converted to WebP!');
})();
