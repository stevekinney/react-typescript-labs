import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useState,
  useId,
  memo,
  useCallback,
} from 'react';
import { checkboxVariants, checkboxCheckVariants } from './checkbox.classes';
import { cn } from '../../utilities/cn';
import { srOnlyStyles } from '../../utilities/styles';

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  label?: string;
  hideLabel?: boolean;
  'data-testid'?: string;
}

export const Checkbox = memo(
  forwardRef<HTMLInputElement, CheckboxProps>(
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
      const checkboxId = providedId || generatedId;

      const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          if (!disabled) {
            if (controlledChecked === undefined) {
              setInternalChecked(e.target.checked);
            }
            onChange?.(e);
          }
        },
        [disabled, controlledChecked, onChange],
      );

      const checkboxElement = (
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            aria-label={hideLabel && label ? label : undefined}
            data-testid={testId}
            {...props}
          />
          <span className={cn(checkboxVariants({ checked: isChecked }), className)}>
            <svg
              className={checkboxCheckVariants({ checked: isChecked })}
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </label>
      );

      if (label) {
        return (
          <div className="flex items-center gap-1.5">
            {checkboxElement}
            <label
              htmlFor={checkboxId}
              className={cn(
                'cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300',
                hideLabel && srOnlyStyles,
              )}
            >
              {label}
            </label>
          </div>
        );
      }

      return checkboxElement;
    },
  ),
);
Checkbox.displayName = 'Checkbox';
