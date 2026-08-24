import { lazy } from 'react';
import type { LoadedPortfolio, LoadedPost, LoadedPage } from './types';

// Use Vite's import.meta.glob to discover MDX files at build time.
// `eager: false` gives us lazy() React components (split per route).
// `import: 'default'` because MDX files export a default React component.

const portfolioModules = import.meta.glob<{
  default: React.ComponentType;
  frontmatter: Record<string, unknown>;
}>('@content/portfolio/*.mdx', { eager: true });

const postModules = import.meta.glob<{
  default: React.ComponentType;
  frontmatter: Record<string, unknown>;
}>([
  '@content/posts/*.mdx',
  '!@content/posts/remote-sensing-benchmark.mdx',
  '../../remote-sensing-benchmark-formatted.md',
  '../../医疗专业任务分类标准.md',
], { eager: true });

const pageModules = import.meta.glob<{
  default: React.ComponentType;
  frontmatter: Record<string, unknown>;
}>('@content/pages/*.mdx', { eager: true });

// --- Portfolio ---

export const portfolio: LoadedPortfolio[] = Object.entries(portfolioModules)
  .map(([path, mod]) => {
    const fm = mod.frontmatter as any;
    return {
      Component: mod.default,
      title: fm.title,
      slug: fm.slug,
      cover: fm.cover,
      role: fm.role,
      year: fm.year,
      tags: fm.tags ?? [],
      summary: fm.summary,
      links: fm.links ?? {},
      featured: fm.featured ?? false,
      order: fm.order ?? 99,
    } satisfies LoadedPortfolio;
  })
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export function getPortfolioBySlug(slug: string): LoadedPortfolio | undefined {
  return portfolio.find((p) => p.slug === slug);
}

export function getFeaturedPortfolio(limit = 3): LoadedPortfolio[] {
  return portfolio.filter((p) => p.featured).slice(0, limit);
}

// --- Posts ---

export const posts: LoadedPost[] = Object.entries(postModules)
  .map(([path, mod]) => {
    const fm = mod.frontmatter as any;
    return {
      Component: mod.default,
      title: fm.title,
      slug: fm.slug,
      date: fm.date,
      tags: fm.tags ?? [],
      summary: fm.summary,
      featured: fm.featured ?? false,
    } satisfies LoadedPost;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPostBySlug(slug: string): LoadedPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(limit = 3): LoadedPost[] {
  return posts.filter((p) => p.featured).slice(0, limit);
}

export function getRecentPosts(limit = 5): LoadedPost[] {
  return posts.slice(0, limit);
}

export function getAdjacentPosts(slug: string): {
  prev?: LoadedPost;
  next?: LoadedPost;
} {
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx < posts.length - 1 ? posts[idx + 1] : undefined, // older
    next: idx > 0 ? posts[idx - 1] : undefined, // newer
  };
}

// --- Pages ---

export const pages: LoadedPage[] = Object.entries(pageModules).map(([path, mod]) => {
  const fm = mod.frontmatter as any;
  return {
    Component: mod.default,
    slug: fm.slug,
    title: fm.title,
  } satisfies LoadedPage;
});

export function getPageBySlug(slug: string): LoadedPage | undefined {
  return pages.find((p) => p.slug === slug);
}

// --- Tags ---

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of [...portfolio, ...posts]) {
    for (const t of p.tags) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getItemsByTag(tag: string): {
  portfolio: LoadedPortfolio[];
  posts: LoadedPost[];
} {
  return {
    portfolio: portfolio.filter((p) => p.tags.includes(tag)),
    posts: posts.filter((p) => p.tags.includes(tag)),
  };
}
