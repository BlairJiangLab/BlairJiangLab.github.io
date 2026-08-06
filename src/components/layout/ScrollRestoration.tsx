import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restore scroll to top on route change (excluding hash links).
 * Default browser behavior doesn't reset scroll on push(), so we handle it here.
 */
export function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
