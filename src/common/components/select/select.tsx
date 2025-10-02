import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useId,
  memo,
  useMemo,
} from 'react';
import { ChevronDown } from 'lucide-react';
import { selectVariants, selectIconVariants } from './select.classes';
import { cn } from '../../utilities/cn';
import { labelStyles, srOnlyStyles } from '../../utilities/styles';

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  children?: ReactNode;
  label?: string;
  hideLabel?: boolean;
  'data-testid'?: string;
}

export const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(
    (
      {
        className,
        children,
        label,
        hideLabel = false,
        id: providedId,
        required,
        disabled,
        'data-testid': testId,
        ...props
      },
      ref,
    ) => {
      const generatedId = useId();
      const selectId = providedId || generatedId;

      const selectClasses = useMemo(() => cn(selectVariants(), className), [className]);

      const labelClasses = useMemo(() => cn(labelStyles, hideLabel && srOnlyStyles), [hideLabel]);

      const selectElement = (
        <div className="relative inline-block w-full">
          <select
            ref={ref}
            id={selectId}
            className={selectClasses}
            aria-label={hideLabel && label ? label : undefined}
            data-testid={testId}
            required={required}
            disabled={disabled}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className={selectIconVariants()} aria-hidden="true" />
        </div>
      );

      if (label) {
        return (
          <div className="w-full">
            <label htmlFor={selectId} className={labelClasses}>
              {label}
            </label>
            {selectElement}
          </div>
        );
      }

      return selectElement;
    },
  ),
);
Select.displayName = 'Select';
