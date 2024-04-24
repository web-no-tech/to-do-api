import { CreateTaskService } from '@modules/tasks/services/CreateTaskService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateTaskController {
  static route = '/';

  static validator = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  });

  async handle(request: Request, response: Response) {
    const data = request.body;

    const createTaskService = container.resolve(CreateTaskService);
    const createdTask = await createTaskService.execute(data);

    return response.status(201).json(createdTask);
  }
}
