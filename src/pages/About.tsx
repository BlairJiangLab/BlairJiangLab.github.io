import { Container } from '../components/ui/Container';
import { Prose } from '../components/ui/Prose';
import { getPageBySlug } from '../content';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

export function About() {
  const page = getPageBySlug('about');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container size="default">
      <section className="pt-16 sm:pt-24 pb-10">
        <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
          About
        </div>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight">
          {page.title}
        </h1>
      </section>
      <section className="pb-24">
        <Prose>
          <page.Component />
        </Prose>
      </section>
    </Container>
  );
}
