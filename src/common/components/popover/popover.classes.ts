import { cva } from 'class-variance-authority';

export const popoverContentVariants = cva(
  'rounded-lg shadow transition-all duration-200 max-w-sm bg-white border border-slate-200 text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100',
);

export const popoverArrowVariants = cva(
  'absolute w-2 h-2 rotate-45 bg-white border-l border-t border-slate-200 dark:bg-slate-900 dark:border-slate-700 top-[-5px] left-1/2 -translate-x-1/2',
);
