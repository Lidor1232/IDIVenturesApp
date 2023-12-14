import axios from 'axios';
import axiosRetry from 'axios-retry';

export const idiappAxios = axios.create({
  validateStatus: (status: number) => status < 300,
  timeout: 10000,
});

axiosRetry(idiappAxios, {
  retries: 5,
  retryDelay: (retryCount: number) => {
    return 500 * Math.pow(2, retryCount - 1);
  },
});
