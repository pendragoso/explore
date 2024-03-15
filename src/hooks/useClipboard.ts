import { useEffect, useMemo, useState } from 'react';

import ClipboardJS from 'clipboard';
import { v1 as uuidV1 } from 'uuid';

import { useNotify } from '@zonos/amino/utils/hooks/useNotify';

type Props = {
  copiedTextSuccess?: string;
  /**
   * @param delay Duration of copied tooltip state
   * @default 2000 milliseconds
   * */
  delay?: number;
  label: string;
};

export const useClipboard = ({
  copiedTextSuccess,
  delay = 2000,
  label,
}: Props) => {
  const notify = useNotify();

  const [copied, setCopied] = useState(false);
  /** Have a unique className for the Clipboardjs to target */
  const copyClass = useMemo(() => `copy-input-${uuidV1()}`, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2500);
    }
  }, [copied]);

  useEffect(() => {
    /**
     * use ClipboardJS to copy text to clipboard because it's more reliable than navigator.clipboard.writeText
     * @reference https://stackoverflow.com/a/74528564
     */
    const clipboard = new ClipboardJS(`.${copyClass}`);
    clipboard.on('success', () => {
      notify(copiedTextSuccess || `${label} has been copied`, {
        duration: delay,
        intent: 'info',
      });
      setCopied(true);
    });

    return () => {
      clipboard.destroy();
    };
  }, [label, notify, copyClass, copiedTextSuccess, delay]);

  return { copied, copyClass };
};
