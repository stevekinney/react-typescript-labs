import {
  useState,
  type ComponentPropsWithoutRef,
  forwardRef,
  useId,
  memo,
  useCallback,
  useMemo,
} from 'react';
import { toggleVariants, toggleThumbVariants } from './toggle.classes';
import { cn } from '../../utilities/cn';

export interface ToggleProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onChange' | 'size'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  hideLabel?: boolean;
  'data-testid'?: string;
}

export const Toggle = memo(
  forwardRef<HTMLButtonElement, ToggleProps>(
    (
      {
        checked: controlledChecked,
        onChange,
        className,
        disabled,
        label,
        hideLabel = false,
        id: providedId,
        'data-testid': testId,
        ...props
      },
      ref,
    ) => {
      const [internalChecked, setInternalChecked] = useState(false);
      const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
      const generatedId = useId();
      const toggleId = providedId || generatedId;

      const handleClick = useCallback(() => {
        if (!disabled) {
          const newValue = !isChecked;
          if (controlledChecked === undefined) {
            setInternalChecked(newValue);
          }
          onChange?.(newValue);
        }
      }, [disabled, isChecked, controlledChecked, onChange]);

      const toggleButton = (
        <button
          ref={ref}
          id={toggleId}
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-label={hideLabel && label ? label : undefined}
          onClick={handleClick}
          disabled={disabled}
          className={cn(toggleVariants({ checked: isChecked }), className)}
          data-testid={testId}
          {...props}
        >
          <span className={toggleThumbVariants({ checked: isChecked })} aria-hidden="true" />
        </button>
      );

      const labelClasses = useMemo(
        () =>
          cn(
            'cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300',
            hideLabel && 'sr-only',
          ),
        [hideLabel],
      );

      if (label) {
        return (
          <div className="flex items-center gap-2">
            {toggleButton}
            <label htmlFor={toggleId} className={labelClasses}>
              {label}
            </label>
          </div>
        );
      }

      return toggleButton;
    },
  ),
);
Toggle.displayName = 'Toggle';
