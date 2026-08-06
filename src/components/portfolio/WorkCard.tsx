import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LoadedPortfolio } from '../../content/types';
import { ArrowUpRight } from 'lucide-react';

interface WorkCardProps {
  item: LoadedPortfolio;
  index?: number;
  featured?: boolean;
}

export function WorkCard({ item, index = 0, featured = false }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
    >
      <Link
        to={`/work/${item.slug}`}
        className="group block overflow-hidden rounded-lg border border-border bg-card dark:bg-card-dark transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-border">
          <img
            src={item.cover}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-fg dark:text-fg-dark leading-tight">
                {item.title}
              </h3>
              <div className="mt-1.5 text-xs text-muted dark:text-muted-dark flex items-center gap-2 flex-wrap">
                <span>{item.role}</span>
                <span className="opacity-50">·</span>
                <span>{item.year}</span>
              </div>
            </div>
            <ArrowUpRight
              size={18}
              className="text-muted dark:text-muted-dark group-hover:text-accent transition-colors flex-shrink-0 mt-1"
            />
          </div>
          <p className="mt-3 text-sm text-muted dark:text-muted-dark line-clamp-2">
            {item.summary}
          </p>
          {featured && item.tags.length > 0 && (
            <div className="mt-4 flex gap-1.5 flex-wrap">
              {item.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted dark:text-muted-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
