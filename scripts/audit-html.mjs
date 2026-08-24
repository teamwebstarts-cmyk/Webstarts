import fs from 'fs';
import path from 'path';

const htmlFiles = [
  'index.html',
  'pages/project.html',
  'pages/project-detail.html',
  'pages/privacy-policy.html',
  'pages/terms-of-service.html'
];

let issues = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // Check doctype and html tag
  if (!content.startsWith('<!doctype html>') && !content.startsWith('<!DOCTYPE html>')) {
    issues.push(`${file}: Missing <!doctype html>`);
  }
  if (!content.includes('<html lang="en-IN">')) {
    issues.push(`${file}: Missing lang="en-IN" on <html>`);
  }

  // Check head essential tags
  if (!content.includes('<meta charset="UTF-8">')) {
    issues.push(`${file}: Missing charset UTF-8`);
  }
  if (!content.includes('name="viewport"')) {
    issues.push(`${file}: Missing viewport meta tag`);
  }
  if (!content.includes('<title>')) {
    issues.push(`${file}: Missing <title>`);
  }
  if (!content.includes('name="geo.region"')) {
    issues.push(`${file}: Missing geo.region`);
  }
  if (!content.includes('name="geo.placename"')) {
    issues.push(`${file}: Missing geo.placename`);
  }
  if (!content.includes('rel="canonical"')) {
    issues.push(`${file}: Missing canonical link`);
  }

  // Check for old email typo
  if (content.includes('support@webstart.in')) {
    issues.push(`${file}: Contains old email typo support@webstart.in`);
  }

  // Check for old us english
  if (content.includes('en-US')) {
    issues.push(`${file}: Contains en-US`);
  }

  // Check for unclosed or stray tags
  const openSections = (content.match(/<section/g) || []).length;
  const closeSections = (content.match(/<\/section>/g) || []).length;
  if (openSections !== closeSections) {
    issues.push(`${file}: Section tag mismatch (open: ${openSections}, close: ${closeSections})`);
  }

  const openDivs = (content.match(/<div/g) || []).length;
  const closeDivs = (content.match(/<\/div>/g) || []).length;
  if (openDivs !== closeDivs) {
    issues.push(`${file}: Div tag mismatch (open: ${openDivs}, close: ${closeDivs})`);
  }

  // Check for external unwanted domains in scripts
  if (content.includes('themexriver.com')) {
    issues.push(`${file}: Contains leftover themexriver.com reference`);
  }
}

console.log(`Audited ${htmlFiles.length} HTML files.`);
console.log(`Total issues found: ${issues.length}`);
if (issues.length > 0) {
  console.log('Issues:', JSON.stringify(issues, null, 2));
} else {
  console.log('HTML_STRUCTURE_AUDIT_PASS: Pristine HTML structure across all pages!');
}
