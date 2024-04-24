import { ErrorStatus } from '@crosscutting/constants/ErrorStatus';
import { AppError } from './default/AppError';

export class UnauthorizedError extends AppError {
  constructor(message?: string) {
    super(message ?? 'Unauthorized', ErrorStatus.Unauthorized);
  }
}
