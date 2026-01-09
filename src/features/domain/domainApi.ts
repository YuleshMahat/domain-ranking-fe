import type { Rankings } from '../../types/api';
import { apiUrl, apiProcessor } from '../../utils/apiProcessor';

export const getRankings = async (rankings: Rankings) => {
  return apiProcessor({
    method: 'POST',
    url: `${apiUrl}/domains/rankings`,
    data: { domains: rankings },
  });
};
