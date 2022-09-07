import { environment } from '@env/environment';

const baseURL: string = environment.apiUrl;

export const API_CONFIG = {
  MAJLIS: {
    GET_ITEMS: `${baseURL}majlis`,
  },
};
