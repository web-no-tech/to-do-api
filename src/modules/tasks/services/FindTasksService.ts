import { inject, injectable } from 'tsyringe';
import { ITaskRepository } from '../repositories/ITaskRepository';
import { IFindTasksDTO, IFindTasksResponseDTO } from '../dtos/IFindTasksDTO';

@injectable()
export class FindTasksService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute({
    search,
    page,
    pageSize,
    sort,
  }: IFindTasksDTO): Promise<IFindTasksResponseDTO> {
    const foundTasks = await this.taskRepository.find({
      search,
      page,
      pageSize,
      sort,
    });

    return foundTasks;
  }
}
