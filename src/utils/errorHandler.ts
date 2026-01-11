export const errorHandler = (error: any) => {
  if (error?.status == 400) {
    return {
      message: 'Invalid domains: ',
      status: 'error',
      invalidDomains: error?.response?.data?.invalidDomains,
    };
  } else if (error?.status == 404)
    return { message: error?.response?.data?.message, status: 'error' };
  else return { message: error.message, status: 'error' };
};
