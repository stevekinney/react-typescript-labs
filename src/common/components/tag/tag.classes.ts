import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'inline-flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-md transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
        primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
        secondary:
          'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300',
        success: 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300',
        warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300',
        error: 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        md: 'px-2 py-1 text-sm',
        lg: 'px-2.5 py-1.5 text-base',
      },
      removable: {
        true: 'pr-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export const tagRemoveButtonVariants = cva(
  'ml-0.5 rounded-sm hover:bg-black/10 dark:hover:bg-white/10 transition-colors p-0.5',
);
