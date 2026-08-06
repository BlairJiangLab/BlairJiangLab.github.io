import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'narrow' | 'default' | 'wide';
  className?: string;
}

export function Container({ children, size = 'default', className = '' }: ContainerProps) {
  const widths = {
    narrow: 'max-w-2xl',
    default: 'max-w-5xl',
    wide: 'max-w-6xl',
  };
  return (
    <div className={`mx-auto px-6 sm:px-8 ${widths[size]} ${className}`}>{children}</div>
  );
}
