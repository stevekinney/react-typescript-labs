import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  type KeyboardEvent,
  type ChangeEvent,
  useId,
} from 'react';
import { X } from 'lucide-react';
import {
  tagInputContainerVariants,
  tagVariants,
  tagRemoveButtonVariants,
  tagInputFieldVariants,
} from './tag-input.classes';
import { cn } from '../../utilities/cn';

export interface TagInputProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  tags?: string[];
  onTagsChange?: (tags: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  maxTags?: number;
  allowDuplicates?: boolean;
  delimiters?: string[];
  label?: string;
  hideLabel?: boolean;
  validateTag?: (tag: string) => boolean;
}

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      tags = [],
      onTagsChange,
      placeholder = 'Add a tag...',
      disabled = false,
      maxTags,
      allowDuplicates = false,
      delimiters = [',', 'Enter'],
      label,
      hideLabel = false,
      validateTag,
      className,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputId = useId();

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const addTag = (tag: string) => {
      const trimmedTag = tag.trim();

      if (!trimmedTag) return;

      if (maxTags && tags.length >= maxTags) return;

      if (!allowDuplicates && tags.includes(trimmedTag)) return;

      if (validateTag && !validateTag(trimmedTag)) return;

      onTagsChange?.([...tags, trimmedTag]);
      setInputValue('');
    };

    const removeTag = (index: number) => {
      if (disabled) return;
      const newTags = tags.filter((_, i) => i !== index);
      onTagsChange?.(newTags);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (delimiters.includes(',') && value.includes(',')) {
        const parts = value.split(',');
        parts.slice(0, -1).forEach((part) => {
          if (part.trim()) addTag(part);
        });
        setInputValue(parts[parts.length - 1]);
      } else {
        setInputValue(value);
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (delimiters.includes('Enter') && e.key === 'Enter') {
        e.preventDefault();
        addTag(inputValue);
      }

      if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
        removeTag(tags.length - 1);
      }
    };

    const isMaxTagsReached = maxTags ? tags.length >= maxTags : false;

    return (
      <div className={cn('w-full', className)} {...props}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300',
              hideLabel && 'sr-only',
            )}
          >
            {label}
          </label>
        )}
        <div
          className={tagInputContainerVariants({ focused, disabled })}
          onClick={() => inputRef.current?.focus()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              inputRef.current?.focus();
            }
          }}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="Tag input container"
        >
          {tags.map((tag, index) => (
            <span key={`${tag}-${index}`} className={tagVariants()}>
              {tag}
              {!disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(index);
                  }}
                  className={tagRemoveButtonVariants()}
                  aria-label={`Remove ${tag}`}
                >
                  <X className="h-2.5 w-2.5" />
                </button>
              )}
            </span>
          ))}
          {!isMaxTagsReached && !disabled && (
            <input
              ref={inputRef}
              id={inputId}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false);
                if (inputValue) addTag(inputValue);
              }}
              placeholder={tags.length === 0 ? placeholder : ''}
              disabled={disabled}
              className={tagInputFieldVariants({ disabled })}
              aria-label={label || 'Tag input'}
              aria-describedby={maxTags ? `${inputId}-max` : undefined}
            />
          )}
        </div>
        {maxTags && (
          <span id={`${inputId}-max`} className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {tags.length} / {maxTags} tags
          </span>
        )}
      </div>
    );
  },
);
TagInput.displayName = 'TagInput';
