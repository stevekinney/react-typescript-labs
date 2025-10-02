import { type VariantProps } from 'class-variance-authority';
import {
  useRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useId,
  memo,
  useCallback,
  useMemo,
} from 'react';
import { textareaVariants } from './textarea.classes';
import { cn } from '../../utilities/cn';
import { labelStyles, srOnlyStyles } from '../../utilities/styles';

export interface TextareaProps
  extends ComponentPropsWithoutRef<'textarea'>,
    VariantProps<typeof textareaVariants> {
  autoResize?: boolean;
  showCount?: boolean;
  label?: string;
  hideLabel?: boolean;
  'data-testid'?: string;
}

export const Textarea = memo(
  forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
      {
        variant,
        autoResize,
        maxLength,
        showCount,
        className,
        value: controlledValue,
        onChange,
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
      const internalRef = useRef<HTMLTextAreaElement>(null);
      const [internalValue, setInternalValue] = useState('');
      const value = controlledValue !== undefined ? controlledValue : internalValue;
      const generatedId = useId();
      const textareaId = providedId || generatedId;

      useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);

      const handleAutoResize = useCallback(() => {
        if (autoResize && internalRef.current) {
          internalRef.current.style.height = 'auto';
          internalRef.current.style.height = internalRef.current.scrollHeight + 'px';
        }
      }, [autoResize]);

      useEffect(() => {
        handleAutoResize();
      }, [value, handleAutoResize]);

      const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          if (controlledValue === undefined) {
            setInternalValue(e.target.value);
          }
          onChange?.(e);
        },
        [controlledValue, onChange],
      );

      const charCount = useMemo(() => String(value).length, [value]);
      const charLimit = useMemo(() => maxLength || 0, [maxLength]);

      const textareaElement = (
        <div className="relative w-full">
          <textarea
            ref={internalRef}
            id={textareaId}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            className={cn(
              textareaVariants({ variant, autoResize }),
              showCount && 'pb-8',
              className,
            )}
            aria-label={hideLabel && label ? label : undefined}
            data-testid={testId}
            required={required}
            disabled={disabled}
            {...props}
          />
          {showCount && (
            <div className="absolute right-2 bottom-2 text-xs text-slate-500 dark:text-slate-400">
              {charCount}
              {maxLength && ` / ${charLimit}`}
            </div>
          )}
        </div>
      );

      if (label) {
        return (
          <div className="w-full">
            <label htmlFor={textareaId} className={cn(labelStyles, hideLabel && srOnlyStyles)}>
              {label}
            </label>
            {textareaElement}
          </div>
        );
      }

      return textareaElement;
    },
  ),
);
Textarea.displayName = 'Textarea';
