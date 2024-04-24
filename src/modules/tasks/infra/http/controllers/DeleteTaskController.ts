import { DeleteTaskService } from '@modules/tasks/services/DeleteTaskService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteTaskController {
  static route = '/:taskId';

  static validator = celebrate({
    [Segments.PARAMS]: {
      taskId: Joi.string().uuid().required(),
    },
  });

  async handle(request: Request, response: Response) {
    const { taskId } = request.params;

    const deleteTaskService = container.resolve(DeleteTaskService);
    await deleteTaskService.execute(taskId);

    return response.send();
  }
}
