import { cva } from 'class-variance-authority';

export const tabsListVariants = cva(
  'inline-flex items-center justify-center rounded-lg bg-slate-100 p-1 dark:bg-slate-800',
);

export const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1 text-base font-medium text-slate-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:text-slate-400 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-100',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

export const tabsContentVariants = cva(
  'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:ring-offset-slate-950',
);
