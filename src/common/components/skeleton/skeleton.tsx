import { type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { skeletonVariants } from './skeleton.classes';
import { cn } from '../../utilities/cn';

export interface SkeletonProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
  count?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant, animation, width, height, count = 1, className, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
    };

    if (count > 1) {
      return (
        <>
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              ref={index === 0 ? ref : undefined}
              className={cn(skeletonVariants({ variant, animation }), className)}
              style={customStyle}
              {...props}
            />
          ))}
        </>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, animation }), className)}
        style={customStyle}
        {...props}
      />
    );
  },
);
Skeleton.displayName = 'Skeleton';

// Compound components for common patterns
export const SkeletonText = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} variant="text" className={cn('mb-2 last:mb-0', className)} {...props} />
  ),
);
SkeletonText.displayName = 'SkeletonText';

export const SkeletonTitle = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} variant="title" className={cn('mb-4', className)} {...props} />
  ),
);
SkeletonTitle.displayName = 'SkeletonTitle';

export const SkeletonButton = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  (props, ref) => <Skeleton ref={ref} variant="button" {...props} />,
);
SkeletonButton.displayName = 'SkeletonButton';

export const SkeletonAvatar = forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, 'variant'> & { size?: number }
>(({ size = 40, className, ...props }, ref) => (
  <Skeleton
    ref={ref}
    variant="avatar"
    width={size}
    height={size}
    className={className}
    {...props}
  />
));
SkeletonAvatar.displayName = 'SkeletonAvatar';

export const SkeletonCard = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Skeleton ref={ref} variant="card" className={cn('p-4', className)} {...props}>
      {children}
    </Skeleton>
  ),
);
SkeletonCard.displayName = 'SkeletonCard';

// Add wave animation keyframes to the page when this component is used
if (typeof document !== 'undefined' && !document.querySelector('#skeleton-wave-animation')) {
  const style = document.createElement('style');
  style.id = 'skeleton-wave-animation';
  style.textContent = `
    @keyframes wave {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;
  document.head.appendChild(style);
}
