import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-sm font-medium transition-all duration-200 ease-out',
  {
    variants: {
      variant: {
        neutral: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
        info: 'bg-info-100 text-info-800 dark:bg-info-900/30 dark:text-info-300',
        warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300',
        success: 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300',
        error: 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  },
);
