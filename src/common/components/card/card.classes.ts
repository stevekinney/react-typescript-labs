import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'rounded-lg bg-white border border-slate-200 shadow-sm transition-all duration-200 hover:shadow dark:bg-slate-900 dark:border-slate-700',
  {
    variants: {
      padding: {
        none: '',
        small: 'p-2',
        medium: 'p-3',
        large: 'p-4',
      },
    },
    defaultVariants: {
      padding: 'medium',
    },
  },
);

export const cardHeaderVariants = cva('flex flex-col space-y-1', {
  variants: {
    padding: {
      none: '',
      small: 'p-2',
      medium: 'p-3',
      large: 'p-4',
    },
  },
  defaultVariants: {
    padding: 'medium',
  },
});

export const cardTitleVariants = cva('font-semibold leading-none tracking-tight', {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const cardDescriptionVariants = cva('text-sm text-slate-600 dark:text-slate-400');

export const cardContentVariants = cva('', {
  variants: {
    padding: {
      none: '',
      small: 'p-2 pt-0',
      medium: 'p-3 pt-0',
      large: 'p-4 pt-0',
    },
  },
  defaultVariants: {
    padding: 'medium',
  },
});

export const cardFooterVariants = cva('flex items-center', {
  variants: {
    padding: {
      none: '',
      small: 'p-2 pt-0',
      medium: 'p-3 pt-0',
      large: 'p-4 pt-0',
    },
  },
  defaultVariants: {
    padding: 'medium',
  },
});
