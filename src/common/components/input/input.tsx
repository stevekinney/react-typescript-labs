import { type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, forwardRef, memo, useId, useMemo } from 'react';
import { cn } from '../../utilities/cn';
import { labelStyles, srOnlyStyles } from '../../utilities/styles';
import { inputVariants } from './input.classes';

export interface InputProps
  extends ComponentPropsWithoutRef<'input'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  hideLabel?: boolean;
  'data-testid'?: string;
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        variant,
        className,
        label,
        hideLabel = false,
        id: providedId,
        required,
        disabled,
        'data-testid': testId,
        placeholder = label,
        ...props
      },
      ref,
    ) => {
      const generatedId = useId();
      const inputId = providedId || generatedId;

      const inputClasses = useMemo(
        () => cn(inputVariants({ variant }), className),
        [variant, className],
      );

      const labelClasses = useMemo(() => cn(labelStyles, hideLabel && srOnlyStyles), [hideLabel]);

      if (label) {
        return (
          <div className="w-full">
            <label htmlFor={inputId} className={labelClasses}>
              {label}
            </label>
            <input
              ref={ref}
              id={inputId}
              className={inputClasses}
              aria-label={hideLabel ? label : undefined}
              required={required}
              disabled={disabled}
              data-testid={testId}
              placeholder={placeholder}
              {...props}
            />
          </div>
        );
      }

      return (
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          required={required}
          disabled={disabled}
          data-testid={testId}
          {...props}
        />
      );
    },
  ),
);
Input.displayName = 'Input';
