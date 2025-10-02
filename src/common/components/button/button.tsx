import { type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactElement,
  memo,
  useMemo,
  useCallback,
} from 'react';
import { type LucideIcon } from 'lucide-react';
import { buttonVariants } from './button.classes';
import { cn } from '../../utilities/cn';
import { Spinner } from '../spinner';

type BaseButtonProps = VariantProps<typeof buttonVariants> & {
  leftIcon?: LucideIcon | ReactElement;
  rightIcon?: LucideIcon | ReactElement;
  iconOnly?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
};

type ButtonAsButton = ComponentPropsWithoutRef<'button'> &
  BaseButtonProps & {
    href?: never;
    'data-testid'?: string;
  };

type ButtonAsAnchor = ComponentPropsWithoutRef<'a'> &
  BaseButtonProps & {
    href: string;
    'data-testid'?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = memo(
  forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (
      {
        variant,
        size,
        className,
        leftIcon,
        rightIcon,
        iconOnly,
        loading,
        fullWidth,
        children,
        'data-testid': testId,
        ...props
      },
      ref,
    ) => {
      const classes = useMemo(
        () =>
          cn(
            buttonVariants({ variant, size }),
            iconOnly && 'p-1.5',
            fullWidth && 'w-full',
            loading && 'cursor-wait',
            className,
          ),
        [variant, size, iconOnly, fullWidth, loading, className],
      );

      const renderIcon = useCallback(
        (
          Icon: LucideIcon | ReactElement | undefined,
          position: 'left' | 'right',
        ): ReactElement | null => {
          if (!Icon) return null;

          const iconClasses = cn(
            !iconOnly && position === 'left' && 'mr-1.5',
            !iconOnly && position === 'right' && 'ml-1.5',
            size === 'small' && 'h-3 w-3',
            size === 'medium' && 'h-4 w-4',
            size === 'large' && 'h-5 w-5',
          );

          // Check if it's already a React element
          if (typeof Icon === 'object' && 'type' in Icon) {
            return Icon;
          }

          // Otherwise it's a LucideIcon component that needs to be rendered
          const IconComponent = Icon as LucideIcon;
          return <IconComponent className={iconClasses} />;
        },
        [iconOnly, size],
      );

      const spinnerColor = useMemo(() => {
        if (variant === 'primary' || variant === 'danger') return 'white';
        return 'current';
      }, [variant]);

      const spinnerSize = useMemo(() => {
        switch (size) {
          case 'small':
            return 'sm';
          case 'large':
            return 'lg';
          default:
            return 'md';
        }
      }, [size]);

      const content = (
        <>
          {loading ? (
            <Spinner size={spinnerSize} color={spinnerColor} />
          ) : (
            renderIcon(leftIcon, 'left')
          )}
          {!iconOnly && children}
          {!loading && renderIcon(rightIcon, 'right')}
        </>
      );

      if ('href' in props && props.href !== undefined) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={classes}
            aria-label={iconOnly && typeof children === 'string' ? children : undefined}
            aria-busy={loading}
            data-testid={testId}
            {...props}
          >
            {content}
          </a>
        );
      }

      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={classes}
          aria-label={iconOnly && typeof children === 'string' ? children : undefined}
          aria-busy={loading}
          disabled={loading || props.disabled}
          data-testid={testId}
          {...props}
        >
          {content}
        </button>
      );
    },
  ),
);
Button.displayName = 'Button';
