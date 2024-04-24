import { ErrorStatus } from '@crosscutting/constants/ErrorStatus';
import { AppError } from './default/AppError';

export class InternalServerError extends AppError {
  constructor(message?: string) {
    super(message ?? 'Internal server error', ErrorStatus.Internal);
  }
}
