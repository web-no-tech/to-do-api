import { ErrorStatus } from '@crosscutting/constants/ErrorStatus';
import { AppError } from './default/AppError';

export class BadRequestError extends AppError {
  constructor(message?: string) {
    super(message ?? 'Bad request', ErrorStatus.BadRequest);
  }
}
