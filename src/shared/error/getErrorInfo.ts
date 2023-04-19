import { CustomError } from './domain';

type ErrorInfo = {
  title: string;
  message?: string;
};

export const getErrorInfo = ({ cause }: CustomError): ErrorInfo => {
  switch (cause?.errorCode) {
    case 401:
      return {
        title: '401 - Unauthorized',
        message: 'Access is denied due to invalid credentials',
      };

    case 403:
      return {
        title: '403 - Forbidden',
        message: "You don't have permission to access this page.",
      };

    case 404:
      return {
        title: '404 - Not found',
        message:
          'What you are looking for might have been removed, had its name changed or is temporally unavailable.',
      };

    default:
      return {
        title: 'Error',
        message: 'Sorry, something went wrong. Our team is working on it.',
      };
  }
};
