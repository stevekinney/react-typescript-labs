import { type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  memo,
  type ElementType,
} from 'react';
import {
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardContentVariants,
  cardFooterVariants,
} from './card.classes';
import { cn } from '../../utilities/cn';

export interface CardProps
  extends ComponentPropsWithoutRef<'article'>,
    VariantProps<typeof cardVariants> {
  children?: ReactNode;
  as?: ElementType;
  'data-testid'?: string;
}

export const Card = memo(
  forwardRef<HTMLElement, CardProps>(
    (
      { padding, className, children, as: Component = 'article', 'data-testid': testId, ...props },
      ref,
    ) => {
      return (
        <Component
          ref={ref}
          className={cn(cardVariants({ padding }), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </Component>
      );
    },
  ),
);
Card.displayName = 'Card';

export interface CardHeaderProps
  extends ComponentPropsWithoutRef<'header'>,
    VariantProps<typeof cardHeaderVariants> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const CardHeader = memo(
  forwardRef<HTMLElement, CardHeaderProps>(
    ({ padding, className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <header
          ref={ref}
          className={cn(cardHeaderVariants({ padding }), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </header>
      );
    },
  ),
);
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps
  extends ComponentPropsWithoutRef<'h3'>,
    VariantProps<typeof cardTitleVariants> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const CardTitle = memo(
  forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ size, className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <h3
          ref={ref}
          className={cn(cardTitleVariants({ size }), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </h3>
      );
    },
  ),
);
CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends ComponentPropsWithoutRef<'p'> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const CardDescription = memo(
  forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <p
          ref={ref}
          className={cn(cardDescriptionVariants(), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </p>
      );
    },
  ),
);
CardDescription.displayName = 'CardDescription';

export interface CardContentProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof cardContentVariants> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const CardContent = memo(
  forwardRef<HTMLDivElement, CardContentProps>(
    ({ padding, className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn(cardContentVariants({ padding }), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </div>
      );
    },
  ),
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps
  extends ComponentPropsWithoutRef<'footer'>,
    VariantProps<typeof cardFooterVariants> {
  children?: ReactNode;
  'data-testid'?: string;
}

export const CardFooter = memo(
  forwardRef<HTMLElement, CardFooterProps>(
    ({ padding, className, children, 'data-testid': testId, ...props }, ref) => {
      return (
        <footer
          ref={ref}
          className={cn(cardFooterVariants({ padding }), className)}
          data-testid={testId}
          {...props}
        >
          {children}
        </footer>
      );
    },
  ),
);
CardFooter.displayName = 'CardFooter';
