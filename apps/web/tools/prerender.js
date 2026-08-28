import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import http from 'http';
import { seoConfig } from '../src/data/seoConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.resolve(__dirname, '../../../dist/apps/web');

// Routes to prerender (read from seoConfig)
const routes = Object.keys(seoConfig);

// MIME type map for serving static assets correctly
const MIME_TYPES = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
  '.webp': 'image/webp',
  '.map':  'application/json',
};

async function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, 'http://localhost');
      let filePath = path.join(buildDir, url.pathname);

      // If the exact file exists, serve it with the correct MIME type
      if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(content);
        return;
      }

      // For all other requests (SPA routes), serve index.html
      const indexPath = path.join(buildDir, 'index.html');
      const content = fs.readFileSync(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });

    server.listen(3005, () => {
      console.log('Static server running at http://localhost:3005');
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting prerender process...');
  console.log(`Build directory: ${buildDir}`);
  
  const server = await startServer();
  const browser = await puppeteer.launch({ headless: 'new' });

  try {
    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      const page = await browser.newPage();

      page.on('pageerror', err => console.log('  PAGE ERROR:', err.toString()));

      // Navigate and wait for network to be idle
      await page.goto(`http://localhost:3005${route}`, {
        waitUntil: 'networkidle2', // using networkidle2 is safer if there are long-running requests
        timeout: 60000,
      });

      // Give React Helmet a moment to update the <head> and for animations to settle
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Explicitly wait for JSON-LD schema if configured for this route, or just wait for title
      await page.waitForFunction(() => {
        return document.title.length > 0;
      }, { timeout: 5000 }).catch(() => console.log('  Timeout waiting for title'));

      // Grab the fully-rendered HTML
      const html = await page.content();

      // Verify that Helmet injected the title
      const title = await page.title();
      console.log(`  Title: ${title}`);

      // Determine output path
      const routePath = route === '/' ? 'index.html' : `${route.substring(1)}/index.html`;
      const outputPath = path.join(buildDir, routePath);

      // Create directories if needed
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Restore non-render-blocking Google Fonts pattern
      // During prerender, the onload handler fires and changes media="print" to media="all"
      // We need to revert it so the static HTML keeps fonts non-render-blocking
      let processedHtml = html.replace(
        /(<link\s+rel="stylesheet"\s+href="https:\/\/fonts\.googleapis\.com\/css2[^"]*")\s+media="all"\s+onload="this\.media='all'"/g,
        '$1 media="print" onload="this.media=\'all\'"'
      );

      // Write the prerendered HTML
      fs.writeFileSync(outputPath, processedHtml);
      console.log(`  Saved ${outputPath}`);
      await page.close();
    }
  } catch (error) {
    console.error('Error during prerendering:', error);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
  }
}

async function generateSitemap() {
  console.log('Generating sitemap.xml...');
  const sitemapPath = path.join(buildDir, 'sitemap.xml');
  const publicSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://www.transmedex.org${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(sitemapPath, sitemapXml);
  fs.writeFileSync(publicSitemapPath, sitemapXml);
  console.log('Saved sitemap.xml to build and public directories.');
}

async function run() {
  await prerender();
  await generateSitemap();
  console.log('Prerendering and sitemap generation complete!');
}

run();
