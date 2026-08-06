import { Container } from '../components/ui/Container';
import { WorkCard } from '../components/portfolio/WorkCard';
import { portfolio } from '../content';

export function Work() {
  return (
    <>
      <section className="pt-16 sm:pt-24 pb-10">
        <Container size="wide">
          <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
            Work · {portfolio.length} projects
          </div>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight">
            Selected projects
          </h1>
          <p className="mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed">
            A handful of the things I've built or led. The list is short on purpose —
            quality over completeness.
          </p>
        </Container>
      </section>
      <section className="pb-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <WorkCard key={item.slug} item={item} index={i} featured />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
