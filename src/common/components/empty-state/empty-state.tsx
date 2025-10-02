import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';
import { type LucideIcon } from 'lucide-react';
import {
  emptyStateVariants,
  emptyStateIconVariants,
  emptyStateTitleVariants,
  emptyStateDescriptionVariants,
  emptyStateActionsVariants,
} from './empty-state.classes';
import { cn } from '../../utilities/cn';

export interface EmptyStateProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  icon?: LucideIcon;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon: Icon, title, description, actions, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(emptyStateVariants(), className)} {...props}>
        {Icon && <Icon className={emptyStateIconVariants()} />}

        {title && <h3 className={emptyStateTitleVariants()}>{title}</h3>}

        {description && <p className={emptyStateDescriptionVariants()}>{description}</p>}

        {actions && <div className={emptyStateActionsVariants()}>{actions}</div>}

        {children}
      </div>
    );
  },
);
EmptyState.displayName = 'EmptyState';
