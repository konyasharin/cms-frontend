import axios from 'axios';

export const createInstance = (path: string) => {
  return axios.create({
    baseURL: `${import.meta.env.APP_API_URL}${path[0] === '/' ? path : `/${path}`}`,
  });
};
