import fs from 'fs';
import path from 'path';
import vm from 'vm';

function getFiles(dir, exts = ['.js']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
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

const jsFiles = [...getFiles('js'), ...getFiles('downloaded_assets/js')];
console.log(`Auditing ${jsFiles.length} JavaScript files for syntax errors...`);

let syntaxErrors = [];
for (const file of jsFiles) {
  const code = fs.readFileSync(file, 'utf8');
  try {
    new vm.Script(code, { filename: file });
  } catch (err) {
    syntaxErrors.push({ file, error: err.message });
  }
}

console.log(`Syntax errors found: ${syntaxErrors.length}`);
if (syntaxErrors.length > 0) {
  console.error('JS Syntax Errors:', syntaxErrors);
} else {
  console.log('JS_SYNTAX_AUDIT_PASS: All JS files parsed without any syntax error!');
}

// Check inline scripts in HTML files
const htmlFiles = [
  'index.html',
  'pages/project.html',
  'pages/project-detail.html',
  'pages/privacy-policy.html',
  'pages/terms-of-service.html'
];

let inlineErrors = [];
const scriptTagRegex = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  let match;
  let scriptIndex = 0;
  while ((match = scriptTagRegex.exec(html)) !== null) {
    scriptIndex++;
    const code = match[1].trim();
    // Skip JSON-LD or empty scripts
    if (!code || match[0].includes('application/ld+json') || match[0].includes('application/json')) {
      continue;
    }
    try {
      new vm.Script(code, { filename: `${htmlFile} (inline script #${scriptIndex})` });
    } catch (err) {
      inlineErrors.push({ htmlFile, scriptIndex, error: err.message });
    }
  }
}

console.log(`Inline script errors found: ${inlineErrors.length}`);
if (inlineErrors.length > 0) {
  console.error('Inline script errors:', inlineErrors);
} else {
  console.log('INLINE_JS_AUDIT_PASS: All inline scripts parse with 100% valid syntax!');
}
