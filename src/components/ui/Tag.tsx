import { Link } from 'react-router-dom';

interface TagProps {
  tag: string;
  as?: 'span' | 'link';
  size?: 'sm' | 'md';
  className?: string;
}

export function Tag({ tag, as = 'link', size = 'sm', className = '' }: TagProps) {
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-2.5 py-1';
  const base = `inline-block rounded-full border border-border bg-transparent text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent ${sizeClass} ${className}`;

  if (as === 'link') {
    return (
      <Link to={`/tags/${tag}`} className={base}>
        #{tag}
      </Link>
    );
  }
  return <span className={base}>#{tag}</span>;
}
