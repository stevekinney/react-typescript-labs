import { type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, type ReactNode, forwardRef, memo, useMemo } from 'react';
import { badgeVariants } from './badge.classes';
import { cn } from '../../utilities/cn';

export interface BadgeProps
  extends ComponentPropsWithoutRef<'span'>,
    VariantProps<typeof badgeVariants> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const Badge = memo(
  forwardRef<HTMLSpanElement, BadgeProps>(
    ({ variant, className, children, 'data-testid': testId, ...props }, ref) => {
      const badgeClasses = useMemo(
        () => cn(badgeVariants({ variant }), className),
        [variant, className],
      );
      return (
        <span
          ref={ref}
          className={badgeClasses}
          data-testid={testId}
          role="status"
          aria-live="polite"
          {...props}
        >
          {children}
        </span>
      );
    },
  ),
);
Badge.displayName = 'Badge';
