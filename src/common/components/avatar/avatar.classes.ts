import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  },
);

export const avatarImageVariants = cva('h-full w-full object-cover');

export const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center font-medium text-slate-700 dark:text-slate-300',
);
