export const errorHandler = (error: any) => {
  if (error?.status == 400) {
    return {
      message: 'Invalid domains: ',
      status: 'error',
      invalidDomains: error?.response?.data?.invalidDomains,
    };
  } else return { message: error.message, status: 'error' };
};
