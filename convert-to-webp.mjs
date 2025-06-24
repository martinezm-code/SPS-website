import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src/images/webp');
const outputDir = path.join(__dirname, 'src/images/webp');

(async () => {
  await imagemin([
    `${inputDir}/*.jpg`,
    `${inputDir}/*.jpeg`,
    `${inputDir}/*.png`
  ], {
    destination: outputDir,
    plugins: [
      imageminWebp({ quality: 80 })
    ]
  });
  console.log('Images compressed and converted to WebP!');
})();
