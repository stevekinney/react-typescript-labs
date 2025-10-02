import { type ElementType, forwardRef, memo, useMemo } from 'react';
import { cn } from '../../utilities/cn';
import { maxWidths } from '../../utilities/styles';

export interface ContainerProps {
  as?: ElementType;
  maxWidth?: keyof typeof maxWidths;
  noPadding?: boolean;
  className?: string;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export const Container = memo(
  forwardRef<HTMLDivElement, ContainerProps>(
    (
      {
        as: Component = 'div',
        maxWidth = '7xl',
        noPadding = false,
        className,
        children,
        'data-testid': testId,
        ...props
      },
      ref,
    ) => {
      const classes = useMemo(
        () =>
          cn(
            'mx-auto w-full',
            maxWidths[maxWidth],
            !noPadding && 'px-4 sm:px-6 lg:px-8',
            className,
          ),
        [maxWidth, noPadding, className],
      );

      return (
        <Component ref={ref} className={classes} data-testid={testId} {...props}>
          {children}
        </Component>
      );
    },
  ),
);

Container.displayName = 'Container';
