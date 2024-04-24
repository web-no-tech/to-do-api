import { NextFunction, Request, Response } from 'express';
import { CelebrateError } from 'celebrate';
import { JsonWebTokenError } from 'jsonwebtoken';

import { AppError } from '@crosscutting/helpers/error/default/AppError';

export const handleError = (
  error: AppError,
  _: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  // eslint-disable-next-line no-console
  console.log(error);

  try {
    if (error instanceof CelebrateError) {
      const errorBody = error.details.get('body');
      const errorParams = error.details.get('params');
      const errorQuery = error.details.get('query');

      const errorDetails = errorBody?.details[0]
        || errorParams?.details[0]
        || errorQuery?.details[0];

      return response.status(400).json({
        message: errorDetails?.message ?? 'Body validation error',
      });
    }

    if (error instanceof JsonWebTokenError) {
      return response.status(400).json({ message: error.message });
    }

    const { statusCode } = error;
    const { message } = error;

    return response.status(statusCode).json({ message });
  } catch {
    return response.status(500).json({ message: 'Internal Server Error' });
  }
};
