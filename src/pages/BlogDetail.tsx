import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Prose } from '../components/ui/Prose';
import { Tag } from '../components/ui/Tag';
import { getPostBySlug, getAdjacentPosts } from '../content';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { formatDate } from '../lib/format';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentPosts(slug) : {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article>
      <Container size="default">
        <header className="pt-16 sm:pt-24 pb-10 border-b border-border">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            All notes
          </Link>
          <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-fg dark:text-fg-dark leading-[1.1] tracking-tight max-w-3xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted dark:text-muted-dark leading-relaxed max-w-2xl">
            {post.summary}
          </p>
          {post.tags.length > 0 && (
            <div className="mt-8 flex gap-2 flex-wrap">
              {post.tags.map((t) => (
                <Tag key={t} tag={t} size="md" />
              ))}
            </div>
          )}
        </header>

        <div className="py-12 sm:py-16">
          <Prose>
            <post.Component />
          </Prose>
        </div>

        <div className="border-t border-border py-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prev ? (
            <Link
              to={`/blog/${prev.slug}`}
              className="group p-5 rounded-lg border border-border hover:border-accent transition-colors"
            >
              <div className="text-xs text-muted dark:text-muted-dark inline-flex items-center gap-1">
                <ArrowLeft size={12} /> Older
              </div>
              <div className="mt-1 font-serif text-base font-semibold group-hover:text-accent transition-colors line-clamp-2">
                {prev.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              className="group p-5 rounded-lg border border-border hover:border-accent transition-colors text-right"
            >
              <div className="text-xs text-muted dark:text-muted-dark inline-flex items-center gap-1 sm:justify-end">
                Newer <ArrowRight size={12} />
              </div>
              <div className="mt-1 font-serif text-base font-semibold group-hover:text-accent transition-colors line-clamp-2">
                {next.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </article>
  );
}
