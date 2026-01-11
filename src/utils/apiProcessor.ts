import axios from 'axios';
import type { ApiProcessor, ApiResponse } from '../types/api';
import { errorHandler } from './errorHandler';

export const apiUrl = import.meta.env.VITE_API_URL;

export const apiProcessor = async ({ method, url, data }: ApiProcessor) => {
  try {
    const result: ApiResponse = await axios({
      method: method,
      url: url,
      data: data ? data : {},
    });
    return result.data;
  } catch (error: any) {
    const errorObj = errorHandler(error);
    return errorObj;
  }
};
