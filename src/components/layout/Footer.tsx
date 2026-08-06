import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Rss } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border py-12">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-serif text-base font-semibold text-fg dark:text-fg-dark">
              Atelier
            </div>
            <p className="text-sm text-muted dark:text-muted-dark mt-1">
              Selected work and field notes.
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <Link
              to="/work"
              className="text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors"
            >
              Work
            </Link>
            <Link
              to="/blog"
              className="text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors"
            >
              Notes
            </Link>
            <Link
              to="/about"
              className="text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors"
            >
              About
            </Link>
            <a
              href="/rss.xml"
              className="text-muted dark:text-muted-dark hover:text-accent transition-colors flex items-center gap-1.5"
              aria-label="RSS feed"
            >
              <Rss size={14} />
              <span>RSS</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} · Built with care
        </div>
      </Container>
    </footer>
  );
}
