import { type VariantProps } from 'class-variance-authority';
import {
  createContext,
  useContext,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
  useId,
} from 'react';
import { radioVariants, radioInnerVariants, radioGroupVariants } from './radio-group.classes';
import { cn } from '../../utilities/cn';

interface RadioGroupContextValue {
  value: string;
  onChange: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'>,
    VariantProps<typeof radioGroupVariants> {
  value?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
  label?: string;
  hideLabel?: boolean;
}

export const RadioGroup = ({
  value: controlledValue,
  onChange,
  direction,
  className,
  children,
  label,
  hideLabel = false,
  id: providedId,
  ...props
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const generatedId = useId();
  const groupId = providedId || generatedId;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const groupElement = (
    <RadioGroupContext.Provider value={{ value, onChange: handleChange }}>
      <div
        id={groupId}
        className={cn(radioGroupVariants({ direction }), className)}
        role="radiogroup"
        aria-label={hideLabel && label ? label : undefined}
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );

  if (label) {
    return (
      <div className="w-full">
        <label
          htmlFor={groupId}
          className={cn(
            'mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-300',
            hideLabel && 'sr-only',
          )}
        >
          {label}
        </label>
        {groupElement}
      </div>
    );
  }

  return groupElement;
};

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'button'>, 'value' | 'size'> {
  value: string;
  children?: ReactNode;
  label?: string;
  hideLabel?: boolean;
}

export const Radio = ({
  value,
  disabled,
  className,
  children,
  label,
  hideLabel = false,
  ...props
}: RadioProps) => {
  const context = useContext(RadioGroupContext);
  const isChecked = context?.value === value;
  const radioId = useId();

  const handleClick = () => {
    if (!disabled && context) {
      context.onChange(value);
    }
  };

  const radioButton = (
    <button
      id={radioId}
      type="button"
      role="radio"
      aria-checked={isChecked}
      aria-disabled={disabled}
      onClick={handleClick}
      disabled={disabled}
      className={cn(radioVariants({ checked: isChecked }), className)}
      {...props}
    >
      <span className={radioInnerVariants({ checked: isChecked })} aria-hidden="true" />
    </button>
  );

  // Use the label prop if provided, otherwise use children for backward compatibility
  const labelText = label || children;

  if (labelText) {
    return (
      <label className="inline-flex cursor-pointer items-center gap-1.5">
        {radioButton}
        <span className={cn('text-xs text-slate-700 dark:text-slate-300', hideLabel && 'sr-only')}>
          {labelText}
        </span>
      </label>
    );
  }

  return radioButton;
};
