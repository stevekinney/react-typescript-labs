import { type ComponentPropsWithoutRef, type ReactNode, forwardRef, memo } from 'react';
import { cn } from '../../utilities/cn';

export interface ButtonGroupProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const ButtonGroup = memo(
  forwardRef<HTMLDivElement, ButtonGroupProps>(
    ({ className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn('group/button-group flex', className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </div>
      );
    },
  ),
);
ButtonGroup.displayName = 'ButtonGroup';
