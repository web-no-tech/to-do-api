import { UpdateTaskService } from '@modules/tasks/services/UpdateTaskService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateTaskController {
  static route = '/:taskId/toggle-concluded';

  static validator = celebrate({
    [Segments.PARAMS]: {
      taskId: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
    },
  });

  async handle(request: Request, response: Response) {
    const { taskId } = request.params;
    const data = request.body;

    const updateTaskService = container.resolve(UpdateTaskService);
    const updatedTask = await updateTaskService.execute({
      id: taskId,
      ...data,
    });

    return response.json(updatedTask);
  }
}
