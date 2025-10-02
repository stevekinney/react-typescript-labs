import { cva } from 'class-variance-authority';
import {
  transitionStyles,
  focusVisibleRingStyles,
  disabledStyles,
  iconSizes,
} from '../../utilities/styles';

export const checkboxVariants = cva(
  `relative inline-flex cursor-pointer items-center justify-center rounded-sm border-2 border-slate-300 bg-white ${transitionStyles} hover:border-primary-400 ${focusVisibleRingStyles} ${disabledStyles} dark:border-slate-700 dark:bg-slate-900 dark:hover:border-primary-400 ${iconSizes.md}`,
  {
    variants: {
      checked: {
        true: 'border-transparent bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500',
      },
    },
  },
);

export const checkboxCheckVariants = cva(
  'pointer-events-none absolute text-white opacity-0 transition-opacity duration-200 h-2.5 w-2.5',
  {
    variants: {
      checked: {
        true: 'opacity-100',
      },
    },
  },
);
