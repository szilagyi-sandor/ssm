import { CustomError, ErrorInfo, errorInfos } from './domain';

export const getErrorInfo = ({ cause }: CustomError): ErrorInfo => {
  if (cause?.errorCode) {
    const errorInfo = (errorInfos as Record<string, ErrorInfo | undefined>)[
      cause?.errorCode
    ];

    if (errorInfo) {
      return errorInfo;
    }
  }

  return errorInfos.default;
};
