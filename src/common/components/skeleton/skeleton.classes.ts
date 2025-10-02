import { cva } from 'class-variance-authority';

export const skeletonVariants = cva('animate-pulse rounded-md bg-slate-200 dark:bg-slate-800', {
  variants: {
    variant: {
      text: 'h-4',
      title: 'h-6',
      button: 'h-10 w-24',
      avatar: 'rounded-full',
      card: 'h-32 w-full',
      image: 'aspect-square w-full',
      input: 'h-10 w-full',
    },
    animation: {
      pulse: 'animate-pulse',
      wave: 'bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 bg-[length:200%_100%] animate-[wave_2s_ease-in-out_infinite]',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'text',
    animation: 'pulse',
  },
});
