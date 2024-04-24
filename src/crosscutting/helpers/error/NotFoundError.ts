import { ErrorStatus } from '@crosscutting/constants/ErrorStatus';
import { AppError } from './default/AppError';

export class NotFoundError extends AppError {
  constructor(message?: string) {
    super(message ?? 'Not found', ErrorStatus.NotFound);
  }
}
