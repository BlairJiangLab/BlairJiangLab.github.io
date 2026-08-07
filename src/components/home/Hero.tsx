import { Container } from '../ui/Container';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-16 sm:pt-24 pb-20 sm:pb-28">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase">
            Portfolio · Notes · Tools
          </div>
          <h1 className="mt-5 font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-fg dark:text-fg-dark">
            Welcom to <span className="text-accent italic">Blair&apos;s Log</span>
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-muted dark:text-muted-dark leading-relaxed max-w-2xl">
            Product manager, focusing on search and AI, making small tools with Vibe Coding,
            and also recording practices and thoughts here.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fg dark:bg-fg-dark text-bg dark:text-bg-dark text-sm font-medium hover:opacity-90 transition-opacity"
            >
              See the work
              <ArrowDown size={14} />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-fg dark:text-fg-dark text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Read the notes
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
