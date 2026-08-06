// Content types — all loaded from MDX frontmatter

export interface BaseMeta {
  title: string;
  slug: string;
  tags: string[];
  summary: string;
  featured?: boolean;
}

export interface PortfolioItem extends BaseMeta {
  cover: string;
  role: string;
  year: number;
  links: {
    live?: string;
    repo?: string;
  };
  order?: number;
}

export interface PostMeta extends BaseMeta {
  date: string; // ISO date
}

export interface PageMeta {
  slug: string;
  title: string;
}

// Loaders return both metadata and the imported component (lazy)
export interface LoadedPortfolio extends PortfolioItem {
  Component: React.ComponentType;
}
export interface LoadedPost extends PostMeta {
  Component: React.ComponentType;
}
export interface LoadedPage extends PageMeta {
  Component: React.ComponentType;
}
