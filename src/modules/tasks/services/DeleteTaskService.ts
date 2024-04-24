import { inject, injectable } from 'tsyringe';
import { NotFoundError } from '@crosscutting/helpers/error/NotFoundError';
import { ITaskRepository } from '../repositories/ITaskRepository';

@injectable()
export class DeleteTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(taskId: string) {
    const task = await this.taskRepository.findById(taskId);

    if (!task) {
      throw new NotFoundError('Tarefa não encontrada.');
    }

    return this.taskRepository.deleteById(taskId);
  }
}
