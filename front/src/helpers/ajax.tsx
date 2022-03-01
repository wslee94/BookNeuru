import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const baseURL = isDev ? 'http://localhost:3001/api' : '/api';

// Bearer: JWT 대한 토큰을 사용 시 Type
const tempToken = 'askldasjdhakdsdflksjdflkasjdfklaslfkj';
axios.defaults.headers.common.Authorization = `Bearer ${tempToken}`;

interface apiCallArgs {
  method: 'get' | 'post' | 'put' | 'delete';
  params: object;
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
