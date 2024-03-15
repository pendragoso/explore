import { useCallback, useEffect, useRef, useState } from 'react';

import { autoUpdate, offset, useFloating } from '@floating-ui/react-dom';

export const useDropdown = <
  TWrapperRef extends HTMLElement = HTMLDivElement,
  TTriggerRef extends HTMLElement = HTMLButtonElement
>() => {
  const [visible, setVisible] = useState(false);

  const visibility: 'visible' | 'hidden' = visible ? 'visible' : 'hidden';

  const wrapperRef = useRef<TWrapperRef | null>(null);

  const { refs, strategy, x, y } = useFloating<TTriggerRef>({
    middleware: [offset(10)],
    whileElementsMounted: autoUpdate,
  });

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as TWrapperRef;

      // Open and left-click
      if (visible && e.button === 0) {
        // Click outside
        if (!wrapperRef.current?.contains(target)) {
          e.preventDefault();
          e.stopPropagation();
          setVisible(false);
        }
      }
    },
    [visible]
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClick);
      }
    };
  }, [handleClick]);

  return {
    floatingRef: refs.setFloating,
    left: x ? x - 94 : 0,
    position: strategy,
    reference: refs.setReference,
    setVisible,
    top: y || '',
    visibility,
    visible,
    wrapperRef,
  };
};
