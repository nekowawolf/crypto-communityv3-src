'use client';

import { cn } from '@/lib/utils';

interface GlowProps {
  variant?: 'bottom' | 'top' | 'center';
  className?: string;
}

export default function Glow({ variant = 'bottom', className }: GlowProps) {
  let positionClass = '';

  switch (variant) {
    case 'bottom':
      positionClass = 'bottom-0 left-1/2 -translate-x-1/2';
      break;
    case 'top':
      positionClass = 'top-0 left-1/2 -translate-x-1/2';
      break;
    case 'center':
      positionClass = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      break;
  }

  return (
    <div
      className={cn(
        'pointer-events-none absolute h-40 w-40 rounded-full bg-gradient-to-t from-blue-400 via-blue-300 to-transparent opacity-50 blur-3xl animate-pulse',
        positionClass,
        className
      )}
    />
  );
}