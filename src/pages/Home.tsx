import { Hero } from '../components/home/Hero';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { RecentPosts } from '../components/home/RecentPosts';
import { Container } from '../components/ui/Container';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <RecentPosts />
      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="border-t border-border pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-fg dark:text-fg-dark">
                Want to work together?
              </h3>
              <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                I'm always open to interesting problems.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-accent hover:opacity-80 transition-opacity"
            >
              Get in touch
              <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
