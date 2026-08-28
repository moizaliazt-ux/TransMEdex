import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.resolve(__dirname, '../../../dist/apps/web');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let filePath = path.join(buildDir, url.pathname);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  
  const targetPath = (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory())
    ? filePath
    : path.join(buildDir, 'index.html');

  const ext = path.extname(targetPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const fileContent = fs.readFileSync(targetPath);

  const acceptEncoding = req.headers['accept-encoding'] || '';
  const isCompressible = /\.(html|js|mjs|css|json|svg|txt|xml)$/i.test(targetPath);

  if (isCompressible && acceptEncoding.includes('gzip')) {
    const compressed = zlib.gzipSync(fileContent);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Encoding': 'gzip',
      'Vary': 'Accept-Encoding',
      'Cache-Control': 'public, max-age=31536000, immutable'
    });
    res.end(compressed);
  } else {
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable'
    });
    res.end(fileContent);
  }
});

server.listen(4000, async () => {
  console.log('Production server started on http://localhost:4000 (with Gzip compression)');

  const lighthouseProcess = spawn('npx', [
    'lighthouse',
    'http://localhost:4000',
    '--form-factor=mobile',
    '--screenEmulation.mobile=true',
    '--output=json',
    '--output-path=./tools/lighthouse-report.json',
    '--chrome-flags=--headless=new --no-sandbox',
    '--only-categories=performance',
    '--quiet'
  ], { shell: true, stdio: 'inherit' });

  lighthouseProcess.on('close', (code) => {
    console.log('Lighthouse finished with exit code:', code);
    if (fs.existsSync('./tools/lighthouse-report.json')) {
      const report = JSON.parse(fs.readFileSync('./tools/lighthouse-report.json', 'utf8'));
      const perf = report.categories.performance;
      console.log('====================================');
      console.log('MOBILE PERFORMANCE SCORE:', Math.round(perf.score * 100));
      console.log('FCP:', report.audits['first-contentful-paint']?.displayValue);
      console.log('LCP:', report.audits['largest-contentful-paint']?.displayValue);
      console.log('TBT:', report.audits['total-blocking-time']?.displayValue);
      console.log('CLS:', report.audits['cumulative-layout-shift']?.displayValue);
      console.log('Speed Index:', report.audits['speed-index']?.displayValue);
      console.log('====================================');

      // Check opportunities
      const audits = report.audits;
      console.log('Opportunities / Diagnostics:');
      for (const [key, audit] of Object.entries(audits)) {
        if (audit.details && (audit.details.type === 'opportunity' || audit.details.type === 'table') && audit.score !== null && audit.score < 0.9) {
          console.log(`- ${audit.title}: ${audit.displayValue || ''}`);
        }
      }
    }
    server.close();
    process.exit(0);
  });
});
