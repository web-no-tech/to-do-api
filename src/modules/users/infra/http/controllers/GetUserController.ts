import { GetUserService } from '@modules/users/services/GetUserService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetUserController {
  static route = '/:userId';

  static validator = celebrate({
    [Segments.PARAMS]: {
      userId: Joi.string().uuid().required(),
    },
  });

  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const getUserService = container.resolve(GetUserService);
    const user = await getUserService.execute(userId);

    return response.json(user);
  }
}
