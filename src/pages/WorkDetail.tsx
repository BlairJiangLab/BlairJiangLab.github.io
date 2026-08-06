import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Prose } from '../components/ui/Prose';
import { Tag } from '../components/ui/Tag';
import { getPortfolioBySlug, portfolio } from '../content';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getPortfolioBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return <Navigate to="/work" replace />;
  }

  // Get neighboring projects for navigation
  const idx = portfolio.findIndex((p) => p.slug === item.slug);
  const next = idx > 0 ? portfolio[idx - 1] : undefined;
  const prev = idx < portfolio.length - 1 ? portfolio[idx + 1] : undefined;

  return (
    <>
      {/* Cover */}
      <div className="relative w-full h-[40vh] sm:h-[55vh] overflow-hidden bg-border">
        <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
      </div>

      <Container size="default">
        {/* Meta header */}
        <div className="pt-10 sm:pt-14 pb-8 border-b border-border">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            All work
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="min-w-0 flex-1">
              <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
                {item.role} · {item.year}
              </div>
              <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight">
                {item.title}
              </h1>
              <p className="mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed">
                {item.summary}
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {item.links.live && (
                <a
                  href={item.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
              {item.links.repo && (
                <a
                  href={item.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  <Github size={14} />
                  Repo
                </a>
              )}
            </div>
          </div>
          {item.tags.length > 0 && (
            <div className="mt-6 flex gap-2 flex-wrap">
              {item.tags.map((t) => (
                <Tag key={t} tag={t} size="md" />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="py-12 sm:py-16">
          <Prose>
            <item.Component />
          </Prose>
        </div>

        {/* Prev / Next */}
        <div className="border-t border-border py-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="group p-5 rounded-lg border border-border hover:border-accent transition-colors"
            >
              <div className="text-xs text-muted dark:text-muted-dark">← Previous</div>
              <div className="mt-1 font-serif text-lg font-semibold group-hover:text-accent transition-colors">
                {prev.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="group p-5 rounded-lg border border-border hover:border-accent transition-colors text-right sm:text-left"
            >
              <div className="text-xs text-muted dark:text-muted-dark">Next →</div>
              <div className="mt-1 font-serif text-lg font-semibold group-hover:text-accent transition-colors">
                {next.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </>
  );
}
