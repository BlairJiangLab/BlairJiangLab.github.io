import { Container } from '../components/ui/Container';
import { PostCard } from '../components/blog/PostCard';
import { posts } from '../content';

export function Blog() {
  return (
    <>
      <section className="pt-16 sm:pt-24 pb-10">
        <Container size="wide">
          <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
            Notes · {posts.length} posts
          </div>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight">
            Field notes
          </h1>
          <p className="mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed">
            Short, occasional writing about building, design, and the small things
            that accumulate into a craft.
          </p>
        </Container>
      </section>
      <section className="pb-24">
        <Container size="wide">
          <div className="max-w-3xl">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
