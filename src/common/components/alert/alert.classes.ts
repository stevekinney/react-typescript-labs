import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border p-3 text-base transition-all duration-200',
  {
    variants: {
      variant: {
        info: 'border-info-200 bg-info-50 text-info-900 dark:border-info-800 dark:bg-info-950 dark:text-info-100',
        success:
          'border-success-200 bg-success-50 text-success-900 dark:border-success-800 dark:bg-success-950 dark:text-success-100',
        warning:
          'border-warning-200 bg-warning-50 text-warning-900 dark:border-warning-800 dark:bg-warning-950 dark:text-warning-100',
        error:
          'border-error-200 bg-error-50 text-error-900 dark:border-error-800 dark:bg-error-950 dark:text-error-100',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

export const alertTitleVariants = cva('font-medium text-base');

export const alertDescriptionVariants = cva('mt-1 text-sm', {
  variants: {
    variant: {
      info: 'text-info-800 dark:text-info-200',
      success: 'text-success-800 dark:text-success-200',
      warning: 'text-warning-800 dark:text-warning-200',
      error: 'text-error-800 dark:text-error-200',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export const alertCloseButtonVariants = cva(
  'absolute right-2 top-2 rounded-md p-1 transition-all hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-slate-950',
  {
    variants: {
      variant: {
        info: 'text-info-600 hover:bg-info-100 focus:ring-info-400 dark:text-info-400 dark:hover:bg-info-900 dark:focus:ring-info-600',
        success:
          'text-success-600 hover:bg-success-100 focus:ring-success-400 dark:text-success-400 dark:hover:bg-success-900 dark:focus:ring-success-600',
        warning:
          'text-warning-600 hover:bg-warning-100 focus:ring-warning-400 dark:text-warning-400 dark:hover:bg-warning-900 dark:focus:ring-warning-600',
        error:
          'text-error-600 hover:bg-error-100 focus:ring-error-400 dark:text-error-400 dark:hover:bg-error-900 dark:focus:ring-error-600',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);
