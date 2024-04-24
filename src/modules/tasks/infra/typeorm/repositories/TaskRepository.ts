import { ITaskEntity } from '@modules/tasks/domain/ITaskEntity';
import { ITaskRepository } from '@modules/tasks/repositories/ITaskRepository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO';
import { IUpdateTaskDTO } from '@modules/tasks/dtos/IUpdateTaskDTO';
import { IFindTasksDTO } from '@modules/tasks/dtos/IFindTasksDTO';
import { AppDataSource } from '@crosscutting/infra/typeorm';
import { TaskEntity } from '../entities/TaskEntity';

export class TaskRepository implements ITaskRepository {
  private repository: Repository<ITaskEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(TaskEntity);
  }

  async create(data: ICreateTaskDTO) {
    const createdTask = this.repository.create(data);
    return this.repository.save(createdTask);
  }

  async update(data: IUpdateTaskDTO) {
    return this.repository.save(data);
  }

  async find(query: IFindTasksDTO) {
    const {
      page, pageSize, search, sort,
    } = query;

    const where: FindOptionsWhere<ITaskEntity> = {};

    if (search) {
      where.name = ILike(`%${search}%`);
    }

    const orderBy = sort?.reduce((accumulator, _sort) => {
      const [field, order] = _sort.split(',');

      return {
        ...accumulator,
        [field]: order.toLocaleUpperCase(),
      };
    }, {}) as Record<string, 'DESC' | 'ASC'>;

    const ignoreItemsLength = (page - 1) * pageSize;

    const [data, items] = await this.repository.findAndCount({
      skip: ignoreItemsLength,
      take: pageSize,
      where,
      order: orderBy ?? {
        createdAt: 'DESC',
      },
    });

    const pages = Math.ceil(items / pageSize);

    return {
      data,
      items,
      pages,
    };
  }

  async findById(TaskId: string) {
    return this.repository.findOneBy({ id: TaskId });
  }

  async findByName(TaskName: string) {
    return this.repository.findOneBy({ name: TaskName });
  }

  async deleteById(TaskId: string) {
    await this.repository.delete({ id: TaskId });
  }
}
