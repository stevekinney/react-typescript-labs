import { type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, forwardRef, useId } from 'react';
import {
  progressVariants,
  progressBarVariants,
  progressIndeterminateVariants,
} from './progress.classes';
import { cn } from '../../utilities/cn';

export interface ProgressProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'value'>,
    VariantProps<typeof progressBarVariants> {
  value?: number;
  max?: number;
  label?: string;
  showLabel?: boolean;
  indeterminate?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      variant,
      animated,
      label,
      showLabel,
      indeterminate,
      className,
      ...props
    },
    ref,
  ) => {
    const progressId = useId();
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const displayLabel = label || `${Math.round(percentage)}%`;

    if (indeterminate) {
      return (
        <div
          ref={ref}
          role="progressbar"
          aria-label="Loading"
          aria-busy="true"
          className={cn(progressVariants(), className)}
          {...props}
        >
          <div
            className={cn(
              progressIndeterminateVariants({ variant }),
              'animate-[indeterminate_1.5s_ease-in-out_infinite]',
              'w-1/3',
            )}
            style={{
              animation: 'indeterminate 1.5s ease-in-out infinite',
            }}
          />
          <style>{`
            @keyframes indeterminate {
              0% {
                left: -35%;
              }
              60% {
                left: 100%;
              }
              100% {
                left: 100%;
              }
            }
          `}</style>
        </div>
      );
    }

    return (
      <div className="w-full">
        <div className="flex items-center justify-between gap-2">
          <div
            ref={ref}
            id={progressId}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-label={label || 'Progress'}
            className={cn(progressVariants(), 'flex-1', className)}
            {...props}
          >
            <div
              className={cn(progressBarVariants({ variant, animated }))}
              style={{ width: `${percentage}%` }}
            />
          </div>
          {showLabel && (
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              {displayLabel}
            </span>
          )}
        </div>
      </div>
    );
  },
);
Progress.displayName = 'Progress';
