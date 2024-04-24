export type ErrorData = {
  status: string;
  statusCode: number;
};

type ErrorName = 'BadRequest' | 'Internal' | 'NotFound' | 'Unauthorized';

export const ErrorStatus: Record<ErrorName, ErrorData> = {
  BadRequest: {
    status: 'BadRequestError',
    statusCode: 400,
  },
  Internal: {
    status: 'InternalError',
    statusCode: 500,
  },
  NotFound: {
    status: 'NotFound',
    statusCode: 404,
  },
  Unauthorized: {
    status: 'Unauthorized',
    statusCode: 401,
  },
};
