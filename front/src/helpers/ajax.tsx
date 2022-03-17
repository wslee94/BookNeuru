import axios from 'axios';
import { toast } from 'react-toastify';

const isDev = process.env.NODE_ENV === 'development';
const baseURL = isDev ? 'http://localhost:3001/api' : '/api';

// Bearer: JWT 대한 토큰을 사용 시 Type
const tempToken = 'askldasjdhakdsdflksjdflkasjdfklaslfkj';
axios.defaults.headers.common.Authorization = `Bearer ${tempToken}`;
axios.defaults.withCredentials = true;

interface apiCallArgs {
  method: 'get' | 'post' | 'put' | 'delete';
  params?: object;
  url: string;
  config?: object;
}

export const apiCall = ({ method, url, params, config }: apiCallArgs) => {
  return axios({
    method,
    baseURL,
    url,
    data: params,
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
