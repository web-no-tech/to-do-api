import { inject, injectable } from 'tsyringe';
import { NotFoundError } from '@crosscutting/helpers/error/NotFoundError';
import { ITaskRepository } from '../repositories/ITaskRepository';
import { IUpdateTaskDTO } from '../dtos/IUpdateTaskDTO';

@injectable()
export class UpdateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute({
    id,
    name,
  }: IUpdateTaskDTO) {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundError('Tarefa não encontrada.');
    }

    const updatedTask = await this.taskRepository.update({
      id,
      name,
    });

    return updatedTask;
  }
}
