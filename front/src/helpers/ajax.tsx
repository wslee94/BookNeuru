import axios, { AxiosRequestHeaders } from 'axios';
import { toast } from 'react-toastify';

const isDev = process.env.NODE_ENV === 'development';
const baseURL = isDev ? 'http://localhost:3001/api' : '/api';

axios.defaults.withCredentials = true;

interface apiCallArgs {
  method: 'get' | 'post' | 'put' | 'delete';
  params?: object;
  headers?: AxiosRequestHeaders;
  url: string;
  config?: object;
}

export const apiCall = ({ method, url, params, headers, config }: apiCallArgs) => {
  return axios({
    method,
    baseURL,
    url,
    data: params,
    headers,
    ...config,
  });
};

export const getAjaxData = (res: any) => {
  const { status, data, message } = res.data;
  if (status === 'FAIL') {
    toast.warn(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return data;
  }
  return data;
};
