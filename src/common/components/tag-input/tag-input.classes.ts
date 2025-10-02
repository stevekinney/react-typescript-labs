import { cva } from 'class-variance-authority';
import { transitionStyles, textSizes } from '../../utilities/styles';

export const tagInputContainerVariants = cva(
  `flex flex-wrap items-center gap-1.5 rounded-md border px-2 py-1 ${transitionStyles}`,
  {
    variants: {
      focused: {
        true: 'border-primary-400 ring-2 ring-primary-400/20 dark:border-primary-500 dark:ring-primary-500/20',
        false:
          'border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-600',
      },
      disabled: {
        true: 'cursor-not-allowed bg-slate-50 opacity-50 dark:bg-slate-900',
        false: 'bg-white dark:bg-slate-950',
      },
    },
    defaultVariants: {
      focused: false,
      disabled: false,
    },
  },
);

export const tagVariants = cva(
  `inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 ${textSizes.xs} font-medium ${transitionStyles} bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300`,
);

export const tagRemoveButtonVariants = cva(
  `ml-0.5 rounded-full p-0.5 ${transitionStyles} hover:bg-slate-900/10 dark:hover:bg-slate-100/10 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300`,
);

export const tagInputFieldVariants = cva(
  `flex-1 min-w-[100px] border-0 bg-transparent ${textSizes.xs} text-slate-900 placeholder-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder-slate-600`,
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
