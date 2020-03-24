import axios, { AxiosResponse as Response } from 'axios';

const axiosInstance = axios.create(
  {
    baseURL: process.env.REACT_APP_API_HOST,
  }
);

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;

export type AxiosResponse = Response;
