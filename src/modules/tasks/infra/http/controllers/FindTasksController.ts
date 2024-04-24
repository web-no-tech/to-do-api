import { FindTasksService } from '@modules/tasks/services/FindTasksService';
import { Joi, Segments, celebrate } from 'celebrate';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class FindTasksController {
  static route = '/';

  static validator = celebrate({
    [Segments.QUERY]: {
      search: Joi.string(),
      pageSize: Joi.number().required(),
      page: Joi.number().required(),
      sort: Joi.array().items(Joi.string().regex(/^(name),(ASC|DESC)$/)),
    },
  });

  async handle(request: Request, response: Response) {
    const {
      pageSize, page, search, sort,
    } = request.query;

    const findTasksService = container.resolve(FindTasksService);
    const tasks = await findTasksService.execute({
      page: Number(page) as number,
      pageSize: Number(pageSize) as number,
      search: search as string | undefined,
      sort: sort as string[] | undefined,
    });

    return response.json(tasks);
  }
}
