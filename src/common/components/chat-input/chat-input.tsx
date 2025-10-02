import { type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  useState,
  useId,
} from 'react';
import { chatInputVariants, chatTextareaVariants } from './chat-input.classes';
import { Button } from '../button/button';
import { cn } from '../../utilities/cn';

export interface ChatInputProps
  extends Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit' | 'onChange'>,
    VariantProps<typeof chatInputVariants> {
  onSubmit?: (value: string) => void;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  busy?: boolean;
  maxRows?: number;
  submitLabel?: string;
  label?: string;
  hideLabel?: boolean;
}

export const ChatInput = forwardRef<HTMLFormElement, ChatInputProps>(
  (
    {
      className,
      onSubmit,
      placeholder = 'Type a message...',
      value: controlledValue,
      onChange,
      busy = false,
      maxRows = 5,
      submitLabel = 'Send',
      label = 'Message',
      hideLabel = true,
      id: providedId,
      ...formProps
    },
    ref,
  ) => {
    const formRef = useRef<HTMLFormElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [internalValue, setInternalValue] = useState('');
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const generatedId = useId();
    const inputId = providedId || generatedId;

    useImperativeHandle(ref, () => formRef.current as HTMLFormElement);

    // Auto-resize textarea
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        const scrollHeight = textareaRef.current.scrollHeight;
        const lineHeight = parseInt(window.getComputedStyle(textareaRef.current).lineHeight);
        const maxHeight = lineHeight * maxRows;
        textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
      }
    }, [value, maxRows]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (value.trim() && !busy) {
        onSubmit?.(value.trim());
        // Clear input after submit if uncontrolled
        if (controlledValue === undefined) {
          setInternalValue('');
        }
      }
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // Submit on Enter without shift
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (value.trim() && !busy) {
          formRef.current?.requestSubmit();
        }
      }
    };

    const isDisabled = !value.trim() || busy;

    return (
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={cn('w-full', className)}
        aria-busy={busy}
        {...formProps}
      >
        <label
          htmlFor={inputId}
          className={cn(
            'mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-300',
            hideLabel && 'sr-only',
          )}
        >
          {label}
        </label>
        <div className={cn(chatInputVariants({ busy }))}>
          <textarea
            ref={textareaRef}
            id={inputId}
            value={value}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={busy}
            rows={1}
            className={cn(chatTextareaVariants({ busy }))}
            aria-label={hideLabel ? label : undefined}
            aria-required="true"
            aria-disabled={busy}
          />
          <Button
            type="submit"
            size="small"
            variant="primary"
            disabled={isDisabled}
            aria-disabled={isDisabled}
          >
            {submitLabel}
          </Button>
        </div>
      </form>
    );
  },
);
ChatInput.displayName = 'ChatInput';
