import { cva } from 'class-variance-authority';

export const spinnerVariants = cva('inline-block border-2 border-t-transparent rounded-full', {
  variants: {
    size: {
      sm: 'h-4 w-4 border-2',
      md: 'h-6 w-6 border-2',
      lg: 'h-8 w-8 border-3',
      xl: 'h-12 w-12 border-3',
    },
    color: {
      primary: 'border-primary-600 border-t-transparent dark:border-primary-400',
      secondary: 'border-secondary-600 border-t-transparent dark:border-secondary-400',
      white: 'border-white border-t-transparent',
      current: 'border-current border-t-transparent',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});
