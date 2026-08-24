import fs from 'fs';
import path from 'path';

const files = [
  'index.html',
  'pages/project.html',
  'pages/project-detail.html',
  'pages/privacy-policy.html',
  'pages/terms-of-service.html'
];

const imgRegex = /src=["']([^"']+\.(?:png|jpg|jpeg|webp|svg|mp4))["']/g;
const hrefRegex = /href=["']([^"']+\.(?:png|jpg|jpeg|webp|svg|css|js))["']/g;
const linkRegex = /href=["']([^"'#][^"']*)["']/g;

let missingAssets = [];
let missingLinks = [];
let checkedAssets = 0;
let checkedLinks = 0;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`File missing: ${file}`);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  // Check images & media
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    checkedAssets++;
    let target = match[1];
    if (target.startsWith('http') || target.startsWith('data:')) continue;
    let resolved = path.resolve(dir, target);
    if (!fs.existsSync(resolved)) {
      missingAssets.push({ file, asset: target, resolved });
    }
  }

  // Check stylesheet and script references
  while ((match = hrefRegex.exec(content)) !== null) {
    checkedAssets++;
    let target = match[1];
    if (target.startsWith('http') || target.startsWith('//') || target.startsWith('#')) continue;
    let resolved = target.startsWith('/') ? path.join(process.cwd(), target.slice(1)) : path.resolve(dir, target);
    if (!fs.existsSync(resolved)) {
      missingAssets.push({ file, asset: target, resolved });
    }
  }

  // Check internal navigation links
  while ((match = linkRegex.exec(content)) !== null) {
    checkedLinks++;
    let target = match[1].split('#')[0].split('?')[0];
    if (!target || target.startsWith('http') || target.startsWith('mailto:') || target.startsWith('tel:')) continue;
    let resolved = target.startsWith('/') ? path.join(process.cwd(), target.slice(1)) : path.resolve(dir, target);
    // If target has no extension and clean URLs are used, check with .html
    if (!fs.existsSync(resolved) && !fs.existsSync(resolved + '.html')) {
      missingLinks.push({ file, link: match[1], resolved });
    }
  }
}

console.log(`Assets checked: ${checkedAssets}`);
console.log(`Missing assets: ${missingAssets.length}`);
if (missingAssets.length > 0) {
  console.log('Missing Assets Detail:', JSON.stringify(missingAssets, null, 2));
}

console.log(`Links checked: ${checkedLinks}`);
console.log(`Missing links: ${missingLinks.length}`);
if (missingLinks.length > 0) {
  console.log('Missing Links Detail:', JSON.stringify(missingLinks, null, 2));
}

if (missingAssets.length === 0 && missingLinks.length === 0) {
  console.log('AUDIT_PASS: All assets and links exist and are valid!');
}
