import { cva } from 'class-variance-authority';

export const emptyStateVariants = cva(
  'flex flex-col items-center justify-center px-4 py-8 text-center max-w-md',
);

export const emptyStateIconVariants = cva(
  'mx-auto mb-2.5 h-12 w-12 text-slate-400 dark:text-slate-600',
);

export const emptyStateTitleVariants = cva(
  'font-semibold text-base text-slate-900 dark:text-slate-100',
);

export const emptyStateDescriptionVariants = cva(
  'mt-1.5 text-sm text-slate-600 dark:text-slate-400',
);

export const emptyStateActionsVariants = cva(
  'mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center',
);
