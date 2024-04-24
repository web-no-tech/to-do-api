import { inject, injectable } from 'tsyringe';
import { ITaskRepository } from '../repositories/ITaskRepository';
import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO';
import { ITaskEntity } from '../domain/ITaskEntity';

@injectable()
export class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute({ name }: ICreateTaskDTO): Promise<ITaskEntity> {
    const createdTask = this.taskRepository.create({
      name,
    });

    return createdTask;
  }
}
