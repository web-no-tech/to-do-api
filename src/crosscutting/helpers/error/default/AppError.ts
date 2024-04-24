import { ErrorData } from '@crosscutting/constants/ErrorStatus';

export class AppError extends Error {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, error: ErrorData) {
    super();
    this.message = message;
    this.statusCode = error.statusCode;
  }
}
