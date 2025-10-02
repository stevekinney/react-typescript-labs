import { cva } from 'class-variance-authority';

export const chatInputVariants = cva(
  'flex w-full items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm transition-all duration-200 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-400/20 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-primary-500 dark:focus-within:ring-primary-500/20',
  {
    variants: {
      busy: {
        true: 'opacity-60 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      busy: false,
    },
  },
);

export const chatTextareaVariants = cva(
  'flex-1 resize-none bg-transparent px-1.5 py-0.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500',
  {
    variants: {
      busy: {
        true: 'cursor-not-allowed placeholder:animate-pulse',
        false: '',
      },
    },
    defaultVariants: {
      busy: false,
    },
  },
);
