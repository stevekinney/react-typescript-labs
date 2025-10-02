import { cva } from 'class-variance-authority';
import { disabledStyles, focusVisibleRingStyles, transitionStyles } from '../../utilities/styles';

export const buttonVariants = cva(
  `inline-flex items-center whitespace-nowrap justify-center rounded-md font-medium ${transitionStyles} ${focusVisibleRingStyles} ${disabledStyles} disabled:shadow-none`,
  {
    variants: {
      variant: {
        primary:
          'text-white bg-primary-600 shadow-sm shadow-slate-900/10 hover:bg-primary-500 hover:shadow hover:shadow-slate-900/15 active:bg-primary-700 active:shadow-sm dark:bg-primary-500 dark:hover:bg-primary-400 dark:active:bg-primary-600 dark:shadow-slate-100/10 disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-600 dark:disabled:text-slate-400',
        secondary:
          'text-primary-700 bg-primary-50 border border-primary-200 shadow-sm shadow-slate-900/5 hover:bg-primary-100 hover:border-primary-300 hover:shadow hover:shadow-slate-900/10 active:bg-primary-200 active:shadow-sm dark:text-primary-300 dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-slate-500 dark:active:bg-slate-600 dark:shadow-slate-100/10 disabled:bg-slate-50 disabled:text-slate-400 disabled:border-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 dark:disabled:border-slate-700',
        danger:
          'text-white bg-error-600 shadow-sm shadow-slate-900/10 hover:bg-error-500 hover:shadow hover:shadow-slate-900/15 active:bg-error-700 active:shadow-sm focus-visible:ring-error-400 dark:bg-error-500 dark:hover:bg-error-400 dark:active:bg-error-600 dark:shadow-slate-100/10 disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-600 dark:disabled:text-slate-400',
        ghost:
          'text-primary-700 hover:bg-primary-50 hover:text-primary-800 active:bg-primary-100 active:text-primary-900 dark:text-primary-300 dark:hover:bg-slate-800 dark:hover:text-primary-200 dark:active:bg-slate-700 dark:active:text-primary-100 disabled:text-slate-400 disabled:hover:bg-transparent disabled:hover:text-slate-400 dark:disabled:text-slate-500',
      },
      size: {
        small: 'px-1.5 py-0.5 text-sm',
        medium: 'px-2 py-1 text-base',
        large: 'px-3 py-1.5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);
