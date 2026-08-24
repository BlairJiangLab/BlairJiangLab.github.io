/**
 * Build RSS feed for the blog posts.
 * Run with: npm run rss
 *
 * Outputs: dist/rss.xml
 */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

const SITE_URL = process.env.SITE_URL || 'https://blairjianglab.github.io';
const SITE_TITLE = 'Blair — Notes';
const SITE_DESC = 'Field notes on building, design, and tools.';
const AUTHOR = 'Blair';

interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags?: string[];
}

function buildRSS() {
  const postsDir = join(root, 'content/posts');
  if (!existsSync(postsDir)) {
    console.log('No posts directory, skipping RSS build.');
    return;
  }

  const files = readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .filter((f) => f !== 'remote-sensing-benchmark.mdx')
    .map((f) => join(postsDir, f));
  files.push(join(root, 'remote-sensing-benchmark-formatted.md'));
  files.push(join(root, '医疗专业任务分类标准.md'));

  const posts = files
    .map((file) => {
      const raw = readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      return data as PostFrontmatter;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`;
      return `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.summary}]]></description>${
        p.tags
          ? p.tags.map((t) => `\n      <category>${t}</category>`).join('')
          : ''
      }
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESC}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${AUTHOR}</managingEditor>
${items}
  </channel>
</rss>
`;

  const outDir = join(root, 'public');
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'rss.xml'), rss, 'utf-8');
  console.log(`✓ rss.xml written (${posts.length} posts)`);
}

buildRSS();
