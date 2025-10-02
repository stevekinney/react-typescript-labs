import { type VariantProps } from 'class-variance-authority';
import { useRef, useEffect, useState, type ReactNode, type ComponentPropsWithoutRef } from 'react';
import { tooltipVariants } from './tooltip.classes';
import { cn } from '../../utilities/cn';

export interface TooltipProps
  extends Omit<ComponentPropsWithoutRef<'span'>, 'content'>,
    VariantProps<typeof tooltipVariants> {
  children: ReactNode;
  content: ReactNode;
}

export const Tooltip = ({
  children,
  content,
  position = 'top',
  className,
  ...props
}: TooltipProps) => {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const hasShowPopover = (el: Element | null): el is HTMLDivElement & { showPopover: () => void } =>
    !!el &&
    'showPopover' in el &&
    typeof (el as Record<string, unknown>).showPopover === 'function';

  const hasHidePopover = (el: Element | null): el is HTMLDivElement & { hidePopover: () => void } =>
    !!el &&
    'hidePopover' in el &&
    typeof (el as Record<string, unknown>).hidePopover === 'function';

  useEffect(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;

    if (!trigger || !tooltip) return;

    if (CSS.supports('anchor-name', 'auto')) {
      // Use CSS Anchor Positioning if supported
      const anchorId = `anchor-${Math.random().toString(36).substr(2, 9)}`;
      (trigger.style as CSSStyleDeclaration & { anchorName?: string }).anchorName = `--${anchorId}`;

      const positionStyles: Record<string, string> = {
        top: `
          position-anchor: --${anchorId};
          bottom: anchor(top);
          left: anchor(center);
          translate: -50% -0.5rem;
        `,
        bottom: `
          position-anchor: --${anchorId};
          top: anchor(bottom);
          left: anchor(center);
          translate: -50% 0.5rem;
        `,
        left: `
          position-anchor: --${anchorId};
          right: anchor(left);
          top: anchor(center);
          translate: -0.5rem -50%;
        `,
        right: `
          position-anchor: --${anchorId};
          left: anchor(right);
          top: anchor(center);
          translate: 0.5rem -50%;
        `,
      };

      tooltip.style.cssText = positionStyles[position || 'top'] || positionStyles.top;
    } else {
      // Fallback positioning
      const updatePosition = () => {
        const rect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        switch (position) {
          case 'top':
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltipRect.width / 2}px`;
            tooltip.style.top = `${rect.top - tooltipRect.height - 8}px`;
            break;
          case 'bottom':
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltipRect.width / 2}px`;
            tooltip.style.top = `${rect.bottom + 8}px`;
            break;
          case 'left':
            tooltip.style.left = `${rect.left - tooltipRect.width - 8}px`;
            tooltip.style.top = `${rect.top + rect.height / 2 - tooltipRect.height / 2}px`;
            break;
          case 'right':
            tooltip.style.left = `${rect.right + 8}px`;
            tooltip.style.top = `${rect.top + rect.height / 2 - tooltipRect.height / 2}px`;
            break;
        }
      };

      if (isVisible) {
        updatePosition();
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);

        return () => {
          window.removeEventListener('scroll', updatePosition);
          window.removeEventListener('resize', updatePosition);
        };
      }
    }
    return undefined;
  }, [isVisible, position]);

  const showTooltip = () => {
    setIsVisible(true);
    if (hasShowPopover(tooltipRef.current)) {
      tooltipRef.current.showPopover();
    }
  };

  const hideTooltip = () => {
    setIsVisible(false);
    if (hasHidePopover(tooltipRef.current)) {
      tooltipRef.current.hidePopover();
    }
  };

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
        aria-describedby={isVisible ? `tooltip-${position}` : undefined}
        {...props}
      >
        {children}
      </span>
      <div
        ref={tooltipRef}
        id={`tooltip-${position}`}
        role="tooltip"
        {...{ popover: 'manual' }}
        className={cn(
          tooltipVariants({ position }),
          !isVisible && 'opacity-0',
          isVisible && 'opacity-100',
          className,
        )}
        style={{ margin: 0, position: 'fixed' }}
        aria-hidden={!isVisible}
      >
        {content}
      </div>
    </>
  );
};
