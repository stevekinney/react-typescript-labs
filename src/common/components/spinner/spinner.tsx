import { type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, forwardRef, memo, useMemo } from 'react';
import { cn } from '../../utilities/cn';
import { animations, srOnlyStyles } from '../../utilities/styles';
import { spinnerVariants } from './spinner.classes';

export interface SpinnerProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'color'>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
  'data-testid'?: string;
}

export const Spinner = memo(
  forwardRef<HTMLDivElement, SpinnerProps>(
    ({ size, color, className, label = 'Loading', 'data-testid': testId, ...props }, ref) => {
      const classes = useMemo(
        () => cn(spinnerVariants({ size, color }), animations.spin, className),
        [size, color, className],
      );

      return (
        <div
          ref={ref}
          role="status"
          aria-label={label}
          className="inline-flex items-center"
          data-testid={testId}
          {...props}
        >
          <div className={classes} aria-hidden="true" />
          <span className={srOnlyStyles}>{label}</span>
        </div>
      );
    },
  ),
);

Spinner.displayName = 'Spinner';
