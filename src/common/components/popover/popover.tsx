import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  cloneElement,
  isValidElement,
  useId,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { popoverContentVariants } from './popover.classes';
import { cn } from '../../utilities/cn';

export interface PopoverProps extends Omit<ComponentPropsWithoutRef<'div'>, 'content'> {
  trigger: ReactNode;
  content: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ trigger, content, open: controlledOpen, onOpenChange, className, ...props }, ref) => {
    const hasShowPopover = (
      el: Element | null,
    ): el is HTMLDivElement & { showPopover: () => void } =>
      !!el &&
      'showPopover' in el &&
      typeof (el as Record<string, unknown>).showPopover === 'function';

    const hasHidePopover = (
      el: Element | null,
    ): el is HTMLDivElement & { hidePopover: () => void } =>
      !!el &&
      'hidePopover' in el &&
      typeof (el as Record<string, unknown>).hidePopover === 'function';

    const [isOpen, setIsOpen] = useState(false);
    const open = controlledOpen !== undefined ? controlledOpen : isOpen;

    const triggerRef = useRef<HTMLElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const popoverId = useId();

    useImperativeHandle(ref, () => popoverRef.current as HTMLDivElement);

    const handleOpenChange = useCallback(
      (newOpen: boolean) => {
        if (controlledOpen === undefined) {
          setIsOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      },
      [controlledOpen, onOpenChange],
    );

    const showPopover = useCallback(() => {
      if (hasShowPopover(popoverRef.current)) {
        popoverRef.current.showPopover();
        handleOpenChange(true);
      }
    }, [handleOpenChange]);

    const hidePopover = useCallback(() => {
      if (hasHidePopover(popoverRef.current)) {
        popoverRef.current.hidePopover();
        handleOpenChange(false);
      }
    }, [handleOpenChange]);

    const togglePopover = useCallback(() => {
      if (open) {
        hidePopover();
      } else {
        showPopover();
      }
    }, [open, hidePopover, showPopover]);

    // Position the popover using CSS Anchor Positioning if supported
    useEffect(() => {
      const triggerEl = triggerRef.current;
      const popoverEl = popoverRef.current;

      if (!triggerEl || !popoverEl) return;

      if (CSS.supports('anchor-name', 'auto')) {
        const anchorId = `popover-anchor-${popoverId}`;
        (triggerEl.style as CSSStyleDeclaration & { anchorName?: string }).anchorName =
          `--${anchorId}`;

        const positionStyle = `
          position-anchor: --${anchorId};
          top: anchor(bottom);
          left: anchor(center);
          translate: -50% 0.75rem;
        `;

        popoverEl.style.cssText = positionStyle;
      } else {
        // Fallback positioning
        const updatePosition = () => {
          if (!popoverEl || !triggerEl) return;

          const triggerRect = triggerEl.getBoundingClientRect();
          const popoverRect = popoverEl.getBoundingClientRect();

          // Calculate position relative to viewport for fixed positioning
          const centerX = triggerRect.left + triggerRect.width / 2;
          const topY = triggerRect.bottom + 12; // 12px gap below trigger

          // Ensure popover doesn't go off screen
          const viewportWidth = window.innerWidth;
          const popoverWidth = popoverRect.width || 200; // fallback width

          let leftX = centerX - popoverWidth / 2;

          // Adjust if popover would go off left edge
          if (leftX < 8) {
            leftX = 8;
          }
          // Adjust if popover would go off right edge
          else if (leftX + popoverWidth > viewportWidth - 8) {
            leftX = viewportWidth - popoverWidth - 8;
          }

          popoverEl.style.left = `${leftX}px`;
          popoverEl.style.top = `${topY}px`;
          popoverEl.style.position = 'fixed';
          popoverEl.style.zIndex = '9999';
        };

        if (open) {
          // Delay positioning to ensure popover is rendered and has dimensions
          requestAnimationFrame(() => {
            updatePosition();
          });

          window.addEventListener('scroll', updatePosition, { passive: true });
          window.addEventListener('resize', updatePosition, { passive: true });

          return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
          };
        }
      }
      return undefined;
    }, [open, popoverId]);

    // Handle trigger click
    const handleTriggerClick = useCallback(() => {
      togglePopover();
    }, [togglePopover]);

    // Clone trigger and add ref and click handler
    const triggerElement = isValidElement(trigger) ? (
      cloneElement(
        trigger as React.ReactElement<
          React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
        >,
        {
          ref: triggerRef,
          onClick: handleTriggerClick,
          'aria-haspopup': 'dialog',
          'aria-expanded': open,
          'aria-controls': popoverId,
          popoverTarget: popoverId,
        },
      )
    ) : (
      <button
        ref={(el) => {
          triggerRef.current = el;
        }}
        onClick={handleTriggerClick}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={popoverId}
        popoverTarget={popoverId}
      >
        {trigger}
      </button>
    );

    useEffect(() => {
      if (controlledOpen !== undefined) {
        if (controlledOpen) {
          showPopover();
        } else {
          hidePopover();
        }
      }
    }, [controlledOpen, showPopover, hidePopover]);

    return (
      <>
        {triggerElement}
        <div
          ref={popoverRef}
          id={popoverId}
          {...{ popover: 'auto' }}
          className={cn(popoverContentVariants(), 'p-2.5', className)}
          style={{ margin: 0, position: 'fixed', zIndex: 9999 }}
          {...props}
        >
          {content}
        </div>
      </>
    );
  },
);
Popover.displayName = 'Popover';
