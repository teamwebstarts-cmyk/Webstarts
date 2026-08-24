import fs from 'fs';

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

let stack = [];
let mismatched = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const openDivMatches = line.match(/<div(\s|>)/g) || [];
  const closeDivMatches = line.match(/<\/div>/g) || [];

  for (let j = 0; j < openDivMatches.length; j++) {
    stack.push({ line: i + 1, content: line.trim() });
  }

  for (let j = 0; j < closeDivMatches.length; j++) {
    if (stack.length === 0) {
      mismatched.push({ line: i + 1, type: 'extra_closing', content: line.trim() });
    } else {
      stack.pop();
    }
  }
}

console.log('Unclosed open divs remaining:', stack.length);
if (stack.length > 0) {
  console.log('Unclosed divs lines:', stack.map(s => s.line));
}
console.log('Extra closing divs:', mismatched.length);
if (mismatched.length > 0) {
  console.log('Extra closing divs lines:', mismatched.map(m => m.line));
}
