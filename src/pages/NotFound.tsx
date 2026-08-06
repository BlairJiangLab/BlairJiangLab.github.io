import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <Container size="narrow">
      <section className="pt-32 pb-24 text-center">
        <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
          404
        </div>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl font-semibold text-fg dark:text-fg-dark">
          Not here.
        </h1>
        <p className="mt-5 text-lg text-muted dark:text-muted-dark max-w-md mx-auto">
          The page you were looking for either moved, never existed, or is still in draft.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fg dark:bg-fg-dark text-bg dark:text-bg-dark text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={14} />
          Back home
        </Link>
      </section>
    </Container>
  );
}
