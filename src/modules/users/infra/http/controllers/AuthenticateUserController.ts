import { AuthenticateUserService } from '@modules/users/services/AuthenticateUserService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class AuthenticateUserController {
  static route = '/authenticate';

  static validator = celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  });

  async handle(request: Request, response: Response) {
    const data = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);
    const authenticated = await authenticateUserService.execute(data);

    return response.json(authenticated);
  }
}
