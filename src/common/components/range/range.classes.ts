import { cva } from 'class-variance-authority';

export const rangeVariants = cva('relative w-full');

export const rangeTrackVariants = cva(
  'w-full cursor-pointer appearance-none rounded-full bg-slate-200 dark:bg-slate-700 h-2',
);

export const rangeLabelVariants = cva(
  'absolute -top-6 left-1/2 -translate-x-1/2 rounded-md bg-slate-800 px-1.5 py-0.5 text-xs text-white opacity-0 transition-opacity duration-200 dark:bg-slate-700',
  {
    variants: {
      visible: {
        true: 'opacity-100',
      },
    },
  },
);
