import { useEffect } from 'react';
import { ExternalToast, toast } from 'sonner';

export const useNotification = (
  on: boolean,
  message: string,
  variant: 'info' | 'success' | 'warning' | 'error',
  data?: ExternalToast,
) => {
  useEffect(() => {
    if (on) {
      switch (variant) {
        case 'info':
          toast(message, data);
          break;
        case 'success':
          toast.success(message, data);
          break;
        case 'warning':
          toast.warning(message, data);
          break;
        case 'error':
          toast.error(message, data);
          break;
      }
    }
  }, [on, variant]);
};
