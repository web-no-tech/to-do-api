import { inject, injectable } from 'tsyringe';
import { NotFoundError } from '@crosscutting/helpers/error/NotFoundError';
import { ITaskRepository } from '../repositories/ITaskRepository';

@injectable()
export class ToggleConcludedTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(id: string) {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundError('Tarefa não encontrada.');
    }

    const updatedTask = await this.taskRepository.update({
      id,
      concluded: !task.concluded,
    });

    return updatedTask;
  }
}
