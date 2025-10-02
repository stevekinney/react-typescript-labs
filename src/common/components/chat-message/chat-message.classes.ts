import { cva } from 'class-variance-authority';

export const chatMessageVariants = cva('flex gap-2 p-2.5 transition-all duration-200', {
  variants: {
    role: {
      user: 'justify-end',
      assistant: 'justify-start',
      system: 'justify-center',
    },
    hidden: {
      true: 'opacity-0 scale-99 pointer-events-none',
      false: 'opacity-100 scale-100',
    },
  },
  defaultVariants: {
    role: 'user',
    hidden: false,
  },
});

export const chatMessageAvatarVariants = cva(
  'flex-shrink-0 rounded-full flex items-center justify-center font-medium text-white',
  {
    variants: {
      role: {
        user: 'bg-gradient-to-r from-info-500 to-secondary-500 dark:from-info-400 dark:to-secondary-400',
        assistant: 'bg-radial-[at_50%] from-primary-400 via-primary-500 to-secondary-800',
        system: 'bg-slate-600 dark:bg-slate-500',
      },
      size: {
        small: 'h-6 w-6 text-sm',
        medium: 'h-8 w-8 text-base',
        large: 'h-10 w-10 text-lg',
      },
    },
    defaultVariants: {
      role: 'user',
      size: 'medium',
    },
  },
);

export const chatMessageContentVariants = cva(
  'rounded-lg px-2.5 py-2 max-w-[80%] break-words text-base',
  {
    variants: {
      role: {
        user: 'bg-info-500 text-white dark:bg-info-600',
        assistant: 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100',
        system: 'bg-slate-200 text-slate-700 italic text-sm dark:bg-slate-700 dark:text-slate-300',
      },
    },
    defaultVariants: {
      role: 'user',
    },
  },
);

export const chatMessageLoadingVariants = cva('flex gap-1 px-2.5 py-2', {
  variants: {
    role: {
      user: '',
      assistant: '',
      system: '',
    },
  },
  defaultVariants: {
    role: 'assistant',
  },
});

export const chatMessageTimestampVariants = cva('text-sm mt-1', {
  variants: {
    role: {
      user: 'text-slate-500 dark:text-slate-400 text-right',
      assistant: 'text-slate-500 dark:text-slate-400',
      system: 'text-slate-500 dark:text-slate-400 text-center',
    },
  },
  defaultVariants: {
    role: 'user',
  },
});
