import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { PostCard } from '../blog/PostCard';
import { getRecentPosts } from '../../content';
import { ArrowRight } from 'lucide-react';

export function RecentPosts() {
  const items = getRecentPosts(3);

  if (items.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <Container size="wide">
        <div className="flex items-end justify-between mb-2">
          <div>
            <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
              Notes
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-fg dark:text-fg-dark">
              Recent writing
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors"
          >
            All notes
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-6">
          {items.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
        <div className="sm:hidden mt-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors"
          >
            All notes
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
