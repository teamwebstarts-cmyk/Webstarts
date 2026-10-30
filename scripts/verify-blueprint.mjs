import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const gateArg = args.find((a, i) => args[i - 1] === '--gate') || args[0];

function checkG1() {
  const files = ['index.html', 'pages/project.html', 'pages/project-detail.html'];
  for (const f of files) {
    if (!fs.existsSync(f)) throw new Error(`Missing file: ${f}`);
    const content = fs.readFileSync(f, 'utf8');
    if (!content.includes('lang="en-IN"')) throw new Error(`${f} missing lang="en-IN"`);
    if (!content.includes('name="geo.region" content="IN-MP"')) throw new Error(`${f} missing geo.region`);
    if (!content.includes('name="geo.placename" content="Indore"')) throw new Error(`${f} missing geo.placename`);
    if (!content.includes('name="geo.position"')) throw new Error(`${f} missing geo.position`);
    if (!content.includes('name="ICBM"')) throw new Error(`${f} missing ICBM`);
  }
  console.log('G1_PASS: Locale and Geo headers verified across all pages');
}

function checkG2() {
  const content = fs.readFileSync('index.html', 'utf8');
  if (!content.includes('"LocalBusiness"') && !content.includes('"ProfessionalService"')) {
    throw new Error('index.html missing LocalBusiness / ProfessionalService schema');
  }
  if (!content.includes('Indore') || !content.includes('Madhya Pradesh')) {
    throw new Error('index.html schema missing Indore NAP');
  }
  if (!content.includes('22.7196') || !content.includes('75.8577')) {
    throw new Error('index.html schema missing geo coordinates');
  }
  if (!content.includes('knowsAbout')) {
    throw new Error('index.html schema missing knowsAbout Wikidata entity graph');
  }
  console.log('G2_PASS: Enhanced Schema.org JSON-LD verified');
}

function checkG3() {
  if (!fs.existsSync('llms.txt')) throw new Error('Missing llms.txt');
  if (!fs.existsSync('llms-full.txt')) throw new Error('Missing llms-full.txt');
  const llms = fs.readFileSync('llms.txt', 'utf8');
  if (!llms.includes('WebStarts') || !llms.includes('Indore')) throw new Error('llms.txt incomplete');
  console.log('G3_PASS: llms.txt and llms-full.txt verified');
}

function checkG4() {
  if (!fs.existsSync('robots.txt')) throw new Error('Missing robots.txt');
  const content = fs.readFileSync('robots.txt', 'utf8');
  if (!content.includes('OAI-SearchBot') || !content.includes('PerplexityBot') || !content.includes('Claude-SearchBot')) {
    throw new Error('robots.txt missing AI search bot permissions');
  }
  if (content.includes('.html')) throw new Error('robots.txt contains legacy .html extension in sitemap');
  console.log('G4_PASS: robots.txt verified');
}

function checkG5() {
  const index = fs.readFileSync('index.html', 'utf8');
  if (index.includes('?category=client#ws-grid')) throw new Error('index.html contains mismatched ?category=client');
  if (index.includes('href="pages/project.html?category=saas#ws-grid"') && index.includes('Cloud')) {
    // Cloud card must link to cloud
    throw new Error('Cloud card links to ?category=saas');
  }
  const detail = fs.readFileSync('pages/project-detail.html', 'utf8');
  if (detail.includes('http://admin.adipelli.com/')) throw new Error('project-detail.html contains insecure http protocol');
  console.log('G5_PASS: Bento grid and protocol links verified');
}

function checkG6() {
  const index = fs.readFileSync('index.html', 'utf8');
  if (index.includes('alt="List"')) throw new Error('index.html has decorative icons with alt="List"');
  if (index.includes('</h5>') && index.includes('ag-marquee-1')) throw new Error('Marquee contains h5 tags polluting heading hierarchy');
  // Check stray closing section
  if (index.includes('</section>\n                                </div>\n                            </div>')) {
    throw new Error('Stray </section> tag found in Services block');
  }
  console.log('G6_PASS: Semantic heading hierarchy and clean markup verified');
}

function checkG7() {
  const index = fs.readFileSync('index.html', 'utf8');
  if (!index.includes('id="ws-first-name"') || !index.includes('for="ws-first-name"')) {
    throw new Error('Form input labels missing matching for/id attributes');
  }
  if (!index.includes('aria-expanded="true"') || !index.includes('data-bs-target="#collapse')) {
    throw new Error('Accordion state mismatch');
  }
  console.log('G7_PASS: Accessibility and ARIA attributes verified');
}

function checkG8() {
  const index = fs.readFileSync('index.html', 'utf8');
  if (index.includes('three.min.js')) throw new Error('index.html still references unused three.min.js');
  if (index.includes('all.min_1.css')) throw new Error('index.html contains duplicate FontAwesome all.min_1.css');
  console.log('G8_PASS: Asset bloat removed');
}

function checkG9() {
  const index = fs.readFileSync('index.html', 'utf8');
  if (!index.includes('name="botcheck"')) throw new Error('index.html form missing honeypot botcheck');
  if (!index.includes('dpdp_consent') && !index.includes('Privacy Policy')) {
    throw new Error('index.html form missing DPDP notice or consent');
  }
  console.log('G9_PASS: Lead pipeline security and DPDP compliance verified');
}

function checkG10() {
  if (!fs.existsSync('pages/privacy-policy.html')) throw new Error('Missing pages/privacy-policy.html');
  if (!fs.existsSync('pages/terms-of-service.html')) throw new Error('Missing pages/terms-of-service.html');
  const index = fs.readFileSync('index.html', 'utf8');
  const proj = fs.readFileSync('pages/project.html', 'utf8');
  const detail = fs.readFileSync('pages/project-detail.html', 'utf8');
  if (!index.includes('privacy-policy') || !index.includes('terms-of-service')) throw new Error('index.html footer missing legal links');
  if (!proj.includes('privacy-policy') || !proj.includes('terms-of-service')) throw new Error('project.html footer missing legal links');
  if (!detail.includes('privacy-policy') || !detail.includes('terms-of-service')) throw new Error('project-detail.html footer missing legal links');
  console.log('G10_PASS: Legal pages created and footer links verified');
}

function checkG11() {
  if (!fs.existsSync('vercel.json')) throw new Error('Missing vercel.json');
  const content = fs.readFileSync('vercel.json', 'utf8');
  const json = JSON.parse(content);
  if (!json.headers || json.headers.length === 0) throw new Error('vercel.json missing security / caching headers');
  console.log('G11_PASS: vercel.json configuration verified');
}

function checkG12() {
  if (!fs.existsSync('site.webmanifest')) throw new Error('Missing site.webmanifest');
  const manifest = JSON.parse(fs.readFileSync('site.webmanifest', 'utf8'));
  if (!manifest.name || !manifest.icons || manifest.icons.length === 0) throw new Error('Invalid site.webmanifest');

  if (!fs.existsSync('.well-known/security.txt')) throw new Error('Missing .well-known/security.txt');
  if (!fs.existsSync('security.txt')) throw new Error('Missing security.txt');
  const secTxt = fs.readFileSync('.well-known/security.txt', 'utf8');
  if (!secTxt.includes('Contact:') || !secTxt.includes('Expires:')) throw new Error('.well-known/security.txt invalid RFC 9116');

  if (!fs.existsSync('favicon.svg')) throw new Error('Missing root favicon.svg');
  if (!fs.existsSync('favicon.ico')) throw new Error('Missing root favicon.ico');

  console.log('G12_PASS: PWA manifest, root favicons, and RFC 9116 security.txt verified');
}

function checkG13() {
  const index = fs.readFileSync('index.html', 'utf8');
  if (!index.includes('https://webstarts.in/#person-aarti') || !index.includes('https://webstarts.in/#person-anurag')) {
    throw new Error('index.html schema missing founder Person entities');
  }
  if (!index.includes('https://webstarts.in/#person-nainsi') || !index.includes('https://webstarts.in/#person-surendra')) {
    throw new Error('index.html schema missing core employee Person entities');
  }
  const llms = fs.readFileSync('llms.txt', 'utf8');
  if (!llms.includes('Leadership & Engineering Team') || !llms.includes('Aarti Jethaniya') || !llms.includes('Anurag Mourya')) {
    throw new Error('llms.txt missing Leadership directory');
  }
  const llmsFull = fs.readFileSync('llms-full.txt', 'utf8');
  if (!llmsFull.includes('Leadership & Core Engineering Team') || !llmsFull.includes('Nirbhay Hiwse')) {
    throw new Error('llms-full.txt missing Leadership section');
  }
  console.log('G13_PASS: Team leadership Person schemas and entity graph verified');
}

function checkG14() {
  const index = fs.readFileSync('index.html', 'utf8');
  if (!index.includes('Software Development Company in Indore') || !index.includes('React Native App Development')) {
    throw new Error('index.html missing high-intent keywords in meta tags');
  }
  if (!index.includes('SaaS Product Engineering') || !index.includes('Generative AI & LLM Orchestration')) {
    throw new Error('index.html missing knowsAbout schema topics');
  }
  const proj = fs.readFileSync('pages/project.html', 'utf8');
  if (!proj.includes('Software Case Studies') || !proj.includes('React Native App Examples')) {
    throw new Error('pages/project.html missing portfolio keywords');
  }
  const projDet = fs.readFileSync('pages/project-detail.html', 'utf8');
  if (!projDet.includes('Fyngo React Native App') || !projDet.includes('AURA AI Voice Companion')) {
    throw new Error('pages/project-detail.html missing case study keywords');
  }
  const llms = fs.readFileSync('llms.txt', 'utf8');
  if (!llms.includes('Semantic Search & High-Intent Keyword Clusters')) {
    throw new Error('llms.txt missing Semantic Search Keyword Clusters');
  }
  const llmsFull = fs.readFileSync('llms-full.txt', 'utf8');
  if (!llmsFull.includes('Semantic Search Intent & High-Converting Keyword Taxonomy')) {
    throw new Error('llms-full.txt missing Keyword Taxonomy section');
  }
  console.log('G14_PASS: Semantic keyword clusters and meta tags verified across all pages');
}

const gates = {
  G1: checkG1,
  G2: checkG2,
  G3: checkG3,
  G4: checkG4,
  G5: checkG5,
  G6: checkG6,
  G7: checkG7,
  G8: checkG8,
  G9: checkG9,
  G10: checkG10,
  G11: checkG11,
  G12: checkG12,
  G13: checkG13,
  G14: checkG14,
};

if (gateArg && gates[gateArg]) {
  try {
    gates[gateArg]();
  } catch (err) {
    console.error(`FAIL: ${err.message}`);
    process.exit(1);
  }
} else {
  let passed = 0;
  for (const [name, fn] of Object.entries(gates)) {
    try {
      fn();
      passed++;
    } catch (err) {
      console.error(`[${name}] FAIL: ${err.message}`);
    }
  }
  if (passed === Object.keys(gates).length) {
    console.log('ALL_GATES_PASSED');
  } else {
    process.exit(1);
  }
}
