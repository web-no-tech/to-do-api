import { inject, injectable } from 'tsyringe';
import { NotFoundError } from '@crosscutting/helpers/error/NotFoundError';
import { ITaskRepository } from '../repositories/ITaskRepository';
import { ITaskEntity } from '../domain/ITaskEntity';

@injectable()
export class GetTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(taskId: string): Promise<ITaskEntity> {
    const task = await this.taskRepository.findById(taskId);

    if (!task) {
      throw new NotFoundError('Tarefa não encontrada.');
    }

    return task;
  }
}
