import { default as Axios } from 'axios';

export const axios = Axios.create({
  // baseURL: process.env.REQUEST_API,
  baseURL: 'https://api-front-end-challenge.buildstaging.com/api',
  timeout: 1000,
});
