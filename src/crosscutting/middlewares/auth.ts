import { UnauthorizedError } from '@crosscutting/helpers/error/UnauthorizedError';
import { GetUserService } from '@modules/users/services/GetUserService';
import { NextFunction, Request, Response } from 'express';

import { decode, verify } from 'jsonwebtoken';
import { container } from 'tsyringe';

interface IToken {
  id: string
  exp: number
}

export const authenticated = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new UnauthorizedError('Você não possui autorização.');
  }

  const [, token] = authorization.split(' ');

  const { exp } = decode(token) as IToken;

  if (exp * 1000 < new Date().getTime()) {
    throw new UnauthorizedError('Token expirado');
  }

  const { id } = verify(token, process.env.JWT_SECRET_KEY as string) as IToken;

  const getUserService = container.resolve(GetUserService);
  const user = await getUserService.execute(id);

  if (!user) {
    throw new UnauthorizedError('Você não possui autorização.');
  }

  request.user = {
    id: user.id,
    email: user.email,
  };

  return next();
};
