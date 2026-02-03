import React, { useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { XMarkIcon } from '@heroicons/react/24/outline';

const toast = cva(
  'fixed bottom-4 right-4 p-4 rounded shadow-lg flex items-center justify-between',
  {
    variants: {
      type: {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-black',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

export interface ToastProps extends VariantProps<typeof toast> {
  message: string;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
}

const AUTO_CLOSE_FALLBACK = 3000;

const Toast: React.FC<ToastProps> = ({ message, type, duration, closable = true, onClose }) => {
  const [rendered, setRendered] = useState(true);
  const computedDuration = closable ? duration : AUTO_CLOSE_FALLBACK;

  useEffect(() => {
    if (!computedDuration) return;

    const timer = setTimeout(() => {
      setRendered(false);
      onClose?.();
    }, computedDuration);

    return () => clearTimeout(timer);
  }, [computedDuration, onClose]);

  if (!rendered) return null;

  return (
    <div className={toast({ type })}>
      <span>{message}</span>

      {closable && (
        <button
          type="button"
          onClick={() => {
            setRendered(false);
            onClose?.();
          }}
          className="ml-2 cursor-pointer"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Toast;
