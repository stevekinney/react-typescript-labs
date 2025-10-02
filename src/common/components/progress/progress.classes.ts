import { cva } from 'class-variance-authority';

export const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 h-3',
);

export const progressBarVariants = cva('h-full rounded-full transition-all duration-500 ease-out', {
  variants: {
    variant: {
      default: 'bg-primary-500 dark:bg-primary-400',
      gradient: 'bg-radial-[at_50%] from-primary-400 via-primary-500 to-secondary-800',
      success: 'bg-success-500 dark:bg-success-400',
      warning: 'bg-warning-500 dark:bg-warning-400',
      error: 'bg-error-500 dark:bg-error-400',
    },
    animated: {
      true: 'animate-pulse',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    animated: false,
  },
});

export const progressLabelVariants = cva(
  'absolute inset-0 flex items-center justify-center font-medium text-xs',
  {
    variants: {
      variant: {
        default: 'text-white mix-blend-difference',
        gradient: 'text-white mix-blend-difference',
        success: 'text-white mix-blend-difference',
        warning: 'text-white mix-blend-difference',
        error: 'text-white mix-blend-difference',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const progressIndeterminateVariants = cva('absolute inset-y-0 rounded-full', {
  variants: {
    variant: {
      default: 'bg-primary-500 dark:bg-primary-400',
      gradient: 'bg-radial-[at_50%] from-primary-400 via-primary-500 to-secondary-800',
      success: 'bg-success-500 dark:bg-success-400',
      warning: 'bg-warning-500 dark:bg-warning-400',
      error: 'bg-error-500 dark:bg-error-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
