import { errorTexts } from './errorTexts';
import { CustomError, ErrorText } from './domain';

export const getErrorText = ({ cause }: CustomError): ErrorText => {
  if (cause?.errorCode) {
    const errorInfo = (errorTexts as Record<string, ErrorText | undefined>)[
      cause.errorCode
    ];

    if (errorInfo) {
      return errorInfo;
    }
  }

  return errorTexts.default;
};

// CHECKED 0.2.1
