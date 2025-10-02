import { type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  memo,
  useCallback,
  useMemo,
} from 'react';
import { X } from 'lucide-react';
import {
  alertVariants,
  alertTitleVariants,
  alertDescriptionVariants,
  alertCloseButtonVariants,
} from './alert.classes';
import { cn } from '../../utilities/cn';

export interface AlertProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof alertVariants> {
  children?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  'data-testid'?: string;
}

export const Alert = memo(
  forwardRef<HTMLDivElement, AlertProps>(
    (
      { variant, className, children, dismissible, onDismiss, 'data-testid': testId, ...props },
      ref,
    ) => {
      const handleDismiss = useCallback(() => {
        onDismiss?.();
      }, [onDismiss]);

      const alertClasses = useMemo(
        () => cn(alertVariants({ variant }), dismissible && 'pr-12', className),
        [variant, dismissible, className],
      );

      return (
        <div
          ref={ref}
          role="alert"
          aria-live={variant === 'error' ? 'assertive' : 'polite'}
          className={alertClasses}
          data-testid={testId}
          {...props}
        >
          <div className="flex-1">{children}</div>
          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className={alertCloseButtonVariants({ variant })}
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      );
    },
  ),
);
Alert.displayName = 'Alert';

export interface AlertTitleProps extends ComponentPropsWithoutRef<'h5'> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const AlertTitle = memo(
  forwardRef<HTMLHeadingElement, AlertTitleProps>(
    ({ className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <h5
          ref={ref}
          className={cn(alertTitleVariants(), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </h5>
      );
    },
  ),
);
AlertTitle.displayName = 'AlertTitle';

export interface AlertDescriptionProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof alertDescriptionVariants> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const AlertDescription = memo(
  forwardRef<HTMLDivElement, AlertDescriptionProps>(
    ({ variant, className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn(alertDescriptionVariants({ variant }), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </div>
      );
    },
  ),
);
AlertDescription.displayName = 'AlertDescription';
