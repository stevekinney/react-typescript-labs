import { cva } from 'class-variance-authority';
import { transitionStyles, focusVisibleRingStyles, disabledStyles } from '../../utilities/styles';

export const toggleVariants = cva(
  `relative inline-flex cursor-pointer items-center rounded-full bg-slate-200 ${transitionStyles} hover:bg-slate-300 ${focusVisibleRingStyles} ${disabledStyles} dark:bg-slate-700 dark:hover:bg-slate-600 h-5 w-9`,
  {
    variants: {
      checked: {
        true: 'bg-radial-[at_50%] from-primary-400 via-primary-500 to-secondary-800 hover:from-primary-400 hover:via-primary-500 hover:to-secondary-800',
      },
    },
  },
);

export const toggleThumbVariants = cva(
  'absolute left-0.5 top-0.5 rounded-full bg-white shadow transition-transform duration-200 ease-out h-4 w-4',
  {
    variants: {
      checked: {
        true: 'translate-x-4',
      },
    },
  },
);
