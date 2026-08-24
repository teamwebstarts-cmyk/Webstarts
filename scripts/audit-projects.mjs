import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('pages/project-detail.html', 'utf8');
const imgRegex = /["'](\.\.\/downloaded_images\/[^"']+)["']/g;

let missing = [];
let checked = 0;
let match;

while ((match = imgRegex.exec(content)) !== null) {
  checked++;
  const imgPath = match[1];
  const resolved = path.resolve('pages', imgPath);
  if (!fs.existsSync(resolved)) {
    missing.push({ path: imgPath, resolved });
  }
}

console.log(`Checked ${checked} image references in project-detail.html.`);
console.log(`Missing images count: ${missing.length}`);
if (missing.length > 0) {
  console.log('Missing images:', JSON.stringify(missing, null, 2));
} else {
  console.log('PROJECT_DETAIL_AUDIT_PASS: All 100% case study images verified and exist on disk!');
}
