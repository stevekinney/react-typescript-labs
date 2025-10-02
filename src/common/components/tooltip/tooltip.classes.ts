import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'absolute z-50 rounded-md px-2 py-1.5 text-xs shadow transition-opacity duration-200 pointer-events-none bg-slate-900 text-white dark:bg-slate-800',
  {
    variants: {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
    },
    defaultVariants: {
      position: 'top',
    },
  },
);
