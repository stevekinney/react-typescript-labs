import { type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  memo,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { cn } from '../../utilities/cn';
import { avatarVariants, avatarImageVariants, avatarFallbackVariants } from './avatar.classes';

export interface AvatarProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt: string;
  fallback?: string;
  'data-testid'?: string;
}

export const Avatar = memo(
  forwardRef<HTMLDivElement, AvatarProps>(
    ({ src, alt, fallback, size, shape, className, 'data-testid': testId, ...props }, ref) => {
      const [imageError, setImageError] = useState(false);

      const handleImageError = useCallback(() => {
        setImageError(true);
      }, []);

      const initials = useMemo(() => {
        if (fallback) return fallback;

        // Generate initials from alt text
        const words = alt.split(' ').filter(Boolean);
        if (words.length === 0) return '?';
        if (words.length === 1) return words[0][0]?.toUpperCase() || '?';
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
      }, [alt, fallback]);

      const containerClasses = useMemo(
        () => cn(avatarVariants({ size, shape }), className),
        [size, shape, className],
      );

      return (
        <div
          ref={ref}
          className={containerClasses}
          role="img"
          aria-label={alt}
          data-testid={testId}
          {...props}
        >
          {src && !imageError ? (
            <img src={src} alt={alt} onError={handleImageError} className={avatarImageVariants()} />
          ) : (
            <span className={avatarFallbackVariants()} aria-hidden="true">
              {initials}
            </span>
          )}
        </div>
      );
    },
  ),
);

Avatar.displayName = 'Avatar';
