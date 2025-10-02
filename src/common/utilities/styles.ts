/**
 * Shared style constants for maintaining consistency across the component library
 */

// Base form input styles shared by Input, Textarea, Select, and similar components
export const baseInputStyles =
  'w-full rounded-md border px-2 py-1 text-base bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400';

// Focus ring styles for interactive elements
export const focusRingStyles =
  'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-slate-950';

// Focus ring styles for buttons and other elements that should only show ring on keyboard navigation
export const focusVisibleRingStyles =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-400';

// Standard transition for all interactive elements
export const transitionStyles = 'transition-all duration-200 ease-out';

// Disabled state styles
export const disabledStyles = 'disabled:cursor-not-allowed disabled:opacity-50';

// Form input disabled styles with border adjustments
export const inputDisabledStyles =
  'disabled:cursor-not-allowed disabled:opacity-50 disabled:text-slate-400 disabled:border-slate-200 dark:disabled:text-slate-600 dark:disabled:border-slate-700';

// Default border styles for form inputs
export const inputBorderStyles = {
  default:
    'border-slate-300 focus:border-transparent focus:ring-primary-500 dark:border-slate-700 dark:focus:ring-primary-400',
  error:
    'border-error-500 text-error-700 focus:border-transparent focus:ring-error-500 dark:border-error-700 dark:text-error-200 dark:focus:ring-error-500',
};

// Common text sizes used throughout the library
export const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
};

// Common spacing values
export const spacing = {
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
};

// Common padding for inputs/buttons
export const paddingX = {
  sm: 'px-1.5',
  md: 'px-2',
  lg: 'px-3',
};

export const paddingY = {
  sm: 'py-0.5',
  md: 'py-1',
  lg: 'py-1.5',
};

// Icon sizes
export const iconSizes = {
  xs: 'h-3 w-3',
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

// Combined styles for form inputs
export const formInputBase = `${baseInputStyles} ${transitionStyles} ${focusRingStyles} ${inputDisabledStyles}`;

// Label styles
export const labelStyles = 'mb-2 block text-base font-medium text-slate-700 dark:text-slate-300';
export const srOnlyStyles = 'sr-only';

// Border radius tokens
export const borderRadius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

// Shadow tokens
export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

// Container widths
export const maxWidths = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
  prose: 'max-w-prose',
};

// Z-index tokens
export const zIndex = {
  base: 'z-0',
  dropdown: 'z-10',
  sticky: 'z-20',
  fixed: 'z-30',
  overlay: 'z-40',
  modal: 'z-50',
  popover: 'z-50',
  tooltip: 'z-50',
  notification: 'z-60',
};

// Semantic color tokens for status/feedback
export const semanticColors = {
  info: 'text-info-600 dark:text-info-400',
  success: 'text-success-600 dark:text-success-400',
  warning: 'text-warning-600 dark:text-warning-400',
  error: 'text-error-600 dark:text-error-400',
  neutral: 'text-slate-600 dark:text-slate-400',
};

export const semanticBackgrounds = {
  info: 'bg-info-50 dark:bg-info-950/30',
  success: 'bg-success-50 dark:bg-success-950/30',
  warning: 'bg-warning-50 dark:bg-warning-950/30',
  error: 'bg-error-50 dark:bg-error-950/30',
  neutral: 'bg-slate-50 dark:bg-slate-950/30',
};

export const semanticBorders = {
  info: 'border-info-200 dark:border-info-800',
  success: 'border-success-200 dark:border-success-800',
  warning: 'border-warning-200 dark:border-warning-800',
  error: 'border-error-200 dark:border-error-800',
  neutral: 'border-slate-200 dark:border-slate-800',
};

// Animation tokens
export const animations = {
  spin: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  ping: 'animate-ping',
};

// Overlay backgrounds
export const overlayStyles = 'fixed inset-0 bg-black/50 dark:bg-black/70';

// Focus trap container styles
export const focusTrapStyles = 'focus:outline-none';

// Card/surface styles
export const surfaceStyles = {
  base: 'bg-white dark:bg-slate-900',
  raised: 'bg-white shadow-sm dark:bg-slate-900',
  overlay: 'bg-white shadow-lg dark:bg-slate-900',
};

// Gap/spacing tokens
export const gaps = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-6',
};
