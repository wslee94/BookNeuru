import * as Sentry from '@sentry/react';
import { toast } from 'react-toastify';
import axios from 'axios';

export function handleAjaxError(error: any) {
  if (error?.response?.status !== 401) Sentry.captureException(error);

  if (axios.isAxiosError(error)) {
    toast.error(error?.response?.data || error.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(error.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw error;
  }
}
