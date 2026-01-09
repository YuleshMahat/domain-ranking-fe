import axios from 'axios';
import type { ApiProcessor, ApiResponse } from '../types/api';

export const apiUrl = import.meta.env.VITE_API_URL;

export const apiProcessor = async ({
  method,
  url,
  data,
}: ApiProcessor): Promise<ApiResponse> => {
  console.log(apiUrl);
  try {
    const result = await axios({
      method: method,
      url: url,
      data: data ? data : {},
    });

    console.log('The result obtained is: ', result);

    return result.data;
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server error', status: 'error' };
  }
};
