import { UpdateUserService } from '@modules/users/services/UpdateUserService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateUserController {
  static route = '/:userId';

  static validator = celebrate({
    [Segments.PARAMS]: {
      userId: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
      confirmPassword: Joi.string(),
    },
  });

  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const data = request.body;

    const updateUserService = container.resolve(UpdateUserService);
    const updatedUser = await updateUserService.execute({ id: userId, ...data });

    return response.json(updatedUser);
  }
}
