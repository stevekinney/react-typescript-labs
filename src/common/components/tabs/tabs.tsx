import { type VariantProps } from 'class-variance-authority';
import {
  createContext,
  useContext,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useId,
  useEffect,
  useRef,
} from 'react';
import { tabsListVariants, tabsTriggerVariants, tabsContentVariants } from './tabs.classes';
import { cn } from '../../utilities/cn';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
}

const TabsContext = createContext<TabsContextValue | null>(null);

export interface TabsProps extends ComponentPropsWithoutRef<'div'> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    { defaultValue, value: controlledValue, onValueChange, size, className, children, ...props },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const activeTab = controlledValue !== undefined ? controlledValue : internalValue;

    const setActiveTab = (newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, size }}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = 'Tabs';

export interface TabsListProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!listRef.current) return;

        const triggers = Array.from(
          listRef.current.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])'),
        );
        const currentIndex = triggers.findIndex((el) => el === document.activeElement);

        if (currentIndex === -1) return;

        let newIndex = currentIndex;

        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = triggers.length - 1;
            break;
          case 'ArrowRight':
            e.preventDefault();
            newIndex = currentIndex + 1;
            if (newIndex >= triggers.length) newIndex = 0;
            break;
          case 'Home':
            e.preventDefault();
            newIndex = 0;
            break;
          case 'End':
            e.preventDefault();
            newIndex = triggers.length - 1;
            break;
          default:
            return;
        }

        triggers[newIndex]?.focus();
        triggers[newIndex]?.click();
      };

      const current = listRef.current;
      current?.addEventListener('keydown', handleKeyDown);

      return () => {
        current?.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    return (
      <div
        ref={(node) => {
          listRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        role="tablist"
        aria-orientation="horizontal"
        className={cn(tabsListVariants(), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TabsList.displayName = 'TabsList';

export interface TabsTriggerProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof tabsTriggerVariants> {
  value: string;
  children?: ReactNode;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, size: propSize, className, children, disabled, ...props }, ref) => {
    const context = useContext(TabsContext);
    const size = propSize || context?.size;
    const isActive = context?.activeTab === value;
    const triggerId = useId();
    const panelId = `panel-${value}`;

    const handleClick = () => {
      if (!disabled) {
        context?.setActiveTab(value);
      }
    };

    return (
      <button
        ref={ref}
        id={triggerId}
        role="tab"
        type="button"
        aria-selected={isActive}
        aria-controls={panelId}
        data-state={isActive ? 'active' : 'inactive'}
        disabled={disabled}
        onClick={handleClick}
        className={cn(tabsTriggerVariants({ size }), className)}
        tabIndex={isActive ? 0 : -1}
        {...props}
      >
        {children}
      </button>
    );
  },
);
TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends ComponentPropsWithoutRef<'div'> {
  value: string;
  children?: ReactNode;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const context = useContext(TabsContext);
    const isActive = context?.activeTab === value;
    const panelId = `panel-${value}`;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        id={panelId}
        role="tabpanel"
        aria-labelledby={value}
        tabIndex={0}
        className={cn(tabsContentVariants(), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TabsContent.displayName = 'TabsContent';
