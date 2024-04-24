import { ToggleConcludedTaskService } from '@modules/tasks/services/ToggleConcludedTaskService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ToggleConcludedTaskController {
  static route = '/:taskId';

  static validator = celebrate({
    [Segments.PARAMS]: {
      taskId: Joi.string().uuid().required(),
    },
  });

  async handle(request: Request, response: Response) {
    const { taskId } = request.params;
    const data = request.body;

    const toggleConcludedTaskService = container.resolve(ToggleConcludedTaskService);
    const updatedTask = await toggleConcludedTaskService.execute({
      id: taskId,
      ...data,
    });

    return response.json(updatedTask);
  }
}
