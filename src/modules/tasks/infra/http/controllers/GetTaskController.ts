import { GetTaskService } from '@modules/tasks/services/GetTaskService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetTaskController {
  static route = '/:taskId';

  static validator = celebrate({
    [Segments.PARAMS]: {
      taskId: Joi.string().uuid().required(),
    },
  });

  async handle(request: Request, response: Response) {
    const { taskId } = request.params;

    const getTaskService = container.resolve(GetTaskService);
    const task = await getTaskService.execute(taskId);

    return response.json(task);
  }
}
