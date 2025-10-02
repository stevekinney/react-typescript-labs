import { type ReactNode, useEffect, useState, memo } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  container?: Element | DocumentFragment;
}

export const Portal = memo(({ children, container }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(children, container || document.body);
});

Portal.displayName = 'Portal';
