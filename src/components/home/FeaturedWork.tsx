import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { WorkCard } from '../portfolio/WorkCard';
import { getFeaturedPortfolio } from '../../content';
import { ArrowRight } from 'lucide-react';

export function FeaturedWork() {
  const items = getFeaturedPortfolio(3);

  if (items.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <Container size="wide">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
              Featured work
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-fg dark:text-fg-dark">
              Things I've shipped
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors"
          >
            All work
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} featured />
          ))}
        </div>
        <div className="sm:hidden mt-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors"
          >
            All work
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
