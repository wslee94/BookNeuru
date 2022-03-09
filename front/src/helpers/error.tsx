import * as Sentry from '@sentry/react';
import { toast } from 'react-toastify';

export function handleAjaxError(error: any) {
  Sentry.captureException(error);
  toast.error(error.message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
