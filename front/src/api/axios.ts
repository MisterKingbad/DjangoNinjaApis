import axios from 'axios';
import Axios, { AxiosInstance } from 'axios';

axios.defaults.withCredentials = true;

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URLDJANGO,
});

axiosInstance.interceptors.request.use((config:any) => {
  config.headers.Authorization = `Bearer`
  return config;
});

export const httpDjango: AxiosInstance = axiosInstance