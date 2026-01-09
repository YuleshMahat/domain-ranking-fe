export interface ApiProcessor {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
}

export interface ApiResponse<T = any> {
  message: string;
  status: 'success' | 'error';
  data?: T;
}

export type Rankings = string[];

export type RankingData = Record<string, { rank: number; date: string }[]>;
