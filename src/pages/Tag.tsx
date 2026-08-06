import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { WorkCard } from '../components/portfolio/WorkCard';
import { PostCard } from '../components/blog/PostCard';
import { getItemsByTag, getAllTags } from '../content';
import { ArrowLeft, Hash } from 'lucide-react';

export function TagPage() {
  const { tag } = useParams<{ tag: string }>();
  const tagStr = tag ?? '';
  const { portfolio: workItems, posts: postItems } = getItemsByTag(tagStr);
  const allTags = getAllTags();
  const tagMeta = allTags.find((t) => t.tag === tagStr);

  if (!tagMeta) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="pt-16 sm:pt-24 pb-10">
        <Container size="wide">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back home
          </Link>
          <div className="flex items-center gap-3 text-muted dark:text-muted-dark">
            <Hash size={24} className="text-accent" />
            <span className="font-mono text-sm uppercase tracking-wider">Tag</span>
          </div>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark">
            {tagMeta.tag}
          </h1>
          <p className="mt-4 text-muted dark:text-muted-dark">
            {workItems.length + postItems.length} item{workItems.length + postItems.length === 1 ? '' : 's'} tagged with this
          </p>
        </Container>
      </section>

      {workItems.length > 0 && (
        <section className="pb-12">
          <Container size="wide">
            <h2 className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase mb-6">
              Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workItems.map((item, i) => (
                <WorkCard key={item.slug} item={item} index={i} featured />
              ))}
            </div>
          </Container>
        </section>
      )}

      {postItems.length > 0 && (
        <section className="pb-24">
          <Container size="wide">
            <h2 className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase mb-6">
              Notes
            </h2>
            <div className="max-w-3xl">
              {postItems.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
