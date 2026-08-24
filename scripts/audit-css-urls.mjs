import fs from 'fs';
import path from 'path';

function getFiles(dir, exts = ['.css']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file, exts));
    } else {
      if (exts.some(ext => file.endsWith(ext))) {
        results.push(file);
      }
    }
  });
  return results;
}

const cssFiles = ['style.css', ...getFiles('css'), ...getFiles('downloaded_assets/css')];
console.log(`Found ${cssFiles.length} CSS files to audit.`);

const urlRegex = /url\(\s*["']?([^"')]+)["']?\s*\)/g;
let checkedUrls = 0;
let missingUrls = [];

for (const cssFile of cssFiles) {
  const content = fs.readFileSync(cssFile, 'utf8');
  const dir = path.dirname(cssFile);
  let match;

  while ((match = urlRegex.exec(content)) !== null) {
    checkedUrls++;
    let target = match[1].trim();

    // Skip data URIs, http/https, fonts hosted externally, and SVG hash fragments
    if (target.startsWith('data:') || target.startsWith('http://') || target.startsWith('https://') || target.startsWith('#')) {
      continue;
    }

    // Strip query strings or hashes from asset URLs (e.g. font.woff2?v=1.0)
    let cleanTarget = target.split('?')[0].split('#')[0];
    if (!cleanTarget) continue;

    let resolved = path.resolve(dir, cleanTarget);
    if (!fs.existsSync(resolved)) {
      missingUrls.push({ cssFile, target, resolved });
    }
  }
}

console.log(`Audited ${checkedUrls} url() references across all stylesheets.`);
console.log(`Missing url() targets: ${missingUrls.length}`);
if (missingUrls.length > 0) {
  console.log('Missing URLs:', JSON.stringify(missingUrls.slice(0, 20), null, 2));
} else {
  console.log('CSS_URL_AUDIT_PASS: All CSS url() assets exist and resolve perfectly!');
}
