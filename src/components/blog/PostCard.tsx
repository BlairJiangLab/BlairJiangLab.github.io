import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LoadedPost } from '../../content/types';
import { formatDate } from '../../lib/format';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: LoadedPost;
  index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block py-6 border-b border-border last:border-0"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="text-xs text-muted dark:text-muted-dark font-mono">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h3 className="mt-2 font-serif text-xl sm:text-2xl font-semibold text-fg dark:text-fg-dark leading-snug group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-muted-dark line-clamp-2 max-w-prose">
              {post.summary}
            </p>
            {post.tags.length > 0 && (
              <div className="mt-3 flex gap-1.5 flex-wrap">
                {post.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-muted dark:text-muted-dark"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
          <ArrowRight
            size={18}
            className="text-muted dark:text-muted-dark group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
          />
        </div>
      </Link>
    </motion.article>
  );
}
