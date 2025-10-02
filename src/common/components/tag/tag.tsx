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
import { cn } from '../../utilities/cn';
import { focusVisibleRingStyles, iconSizes } from '../../utilities/styles';
import { tagVariants, tagRemoveButtonVariants } from './tag.classes';

export interface TagProps
  extends Omit<ComponentPropsWithoutRef<'span'>, 'children'>,
    VariantProps<typeof tagVariants> {
  children: ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  'data-testid'?: string;
}

export const Tag = memo(
  forwardRef<HTMLSpanElement, TagProps>(
    (
      { variant, size, removable, onRemove, className, children, 'data-testid': testId, ...props },
      ref,
    ) => {
      const handleRemove = useCallback(
        (e: React.MouseEvent | React.KeyboardEvent) => {
          e.stopPropagation();
          onRemove?.();
        },
        [onRemove],
      );

      const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleRemove(e);
          }
        },
        [handleRemove],
      );

      const classes = useMemo(
        () => cn(tagVariants({ variant, size, removable }), className),
        [variant, size, removable, className],
      );

      const iconSize = useMemo(() => {
        switch (size) {
          case 'sm':
            return iconSizes.xs;
          case 'lg':
            return iconSizes.sm;
          default:
            return iconSizes.xs;
        }
      }, [size]);

      return (
        <span ref={ref} className={classes} data-testid={testId} {...props}>
          {children}
          {removable && (
            <button
              type="button"
              onClick={handleRemove}
              onKeyDown={handleKeyDown}
              className={cn(tagRemoveButtonVariants(), focusVisibleRingStyles, 'rounded-sm')}
              aria-label={`Remove ${children}`}
            >
              <X className={iconSize} aria-hidden="true" />
            </button>
          )}
        </span>
      );
    },
  ),
);

Tag.displayName = 'Tag';
