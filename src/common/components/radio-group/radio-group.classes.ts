import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  'relative inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border-2 border-slate-300 bg-white transition-all duration-200 ease-out hover:border-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-primary-400 dark:focus-visible:ring-primary-400',
  {
    variants: {
      checked: {
        true: 'border-transparent bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500',
      },
    },
  },
);

export const radioInnerVariants = cva(
  'absolute rounded-full bg-slate-50 shadow opacity-0 transition-all duration-200 h-1.5 w-1.5',
  {
    variants: {
      checked: {
        true: 'opacity-100',
      },
    },
  },
);

export const radioGroupVariants = cva('flex gap-2', {
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});
