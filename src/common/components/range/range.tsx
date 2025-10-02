import {
  useState,
  type ComponentPropsWithoutRef,
  forwardRef,
  useId,
  memo,
  useCallback,
  useMemo,
} from 'react';
import { rangeVariants, rangeTrackVariants, rangeLabelVariants } from './range.classes';
import { cn } from '../../utilities/cn';

export interface RangeProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'size' | 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  showLabel?: boolean;
  onChange?: (value: number) => void;
  label?: string;
  hideLabel?: boolean;
  'data-testid'?: string;
}

export const Range = memo(
  forwardRef<HTMLInputElement, RangeProps>(
    (
      {
        min = 0,
        max = 100,
        step = 1,
        value: controlledValue,
        onChange,
        showLabel,
        className,
        label,
        hideLabel = false,
        id: providedId,
        'data-testid': testId,
        ...props
      },
      ref,
    ) => {
      const [internalValue, setInternalValue] = useState(min);
      const [isDragging, setIsDragging] = useState(false);
      const value = controlledValue !== undefined ? Number(controlledValue) : internalValue;
      const generatedId = useId();
      const rangeId = providedId || generatedId;

      const percentage = useMemo(() => ((value - min) / (max - min)) * 100, [value, min, max]);

      const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = Number(e.target.value);
          if (controlledValue === undefined) {
            setInternalValue(newValue);
          }
          onChange?.(newValue);
        },
        [controlledValue, onChange],
      );

      const handleMouseDown = useCallback(() => setIsDragging(true), []);
      const handleMouseUp = useCallback(() => setIsDragging(false), []);
      const handleTouchStart = useCallback(() => setIsDragging(true), []);
      const handleTouchEnd = useCallback(() => setIsDragging(false), []);

      const rangeClasses = useMemo(() => cn(rangeVariants(), 'relative', className), [className]);

      const labelClasses = useMemo(
        () =>
          cn(
            'mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300',
            hideLabel && 'sr-only',
          ),
        [hideLabel],
      );

      const thumbClasses = useMemo(
        () =>
          cn(
            'ring-primary-500 pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow ring-2 transition-transform hover:scale-101 dark:bg-slate-200 h-3 w-3',
            isDragging && 'scale-110',
          ),
        [isDragging],
      );

      const rangeElement = (
        <div className={rangeClasses}>
          {showLabel && (
            <div
              className={rangeLabelVariants({ visible: isDragging })}
              style={{ left: `${percentage}%` }}
              aria-hidden="true"
            >
              {value}
            </div>
          )}
          <div className="relative">
            <div className={rangeTrackVariants()}>
              <div
                className="from-primary-400 via-primary-500 to-secondary-800 absolute top-0 left-0 h-full rounded-full bg-radial-[at_50%]"
                style={{ width: `${percentage}%` }}
                aria-hidden="true"
              />
            </div>
            <input
              ref={ref}
              id={rangeId}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleChange}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              data-testid={testId}
              className="absolute inset-0 h-2 w-full cursor-pointer opacity-0"
              aria-label={hideLabel && label ? label : undefined}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              {...props}
            />
            <div
              className={thumbClasses}
              style={{
                left: `calc(${percentage}% - 6px)`,
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      );

      if (label) {
        return (
          <div className="w-full">
            <label htmlFor={rangeId} className={labelClasses}>
              {label}
            </label>
            {rangeElement}
          </div>
        );
      }

      return rangeElement;
    },
  ),
);
Range.displayName = 'Range';
