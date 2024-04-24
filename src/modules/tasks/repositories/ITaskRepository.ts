import { ITaskEntity } from '../domain/ITaskEntity';
import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO';
import { IFindTasksDTO, IFindTasksResponseDTO } from '../dtos/IFindTasksDTO';
import { IUpdateTaskDTO } from '../dtos/IUpdateTaskDTO';

export interface ITaskRepository {
  create(data: ICreateTaskDTO): Promise<ITaskEntity>
  update(data: IUpdateTaskDTO): Promise<ITaskEntity>
  deleteById(TaskId: string): Promise<void>
  find(query: IFindTasksDTO): Promise<IFindTasksResponseDTO>
  findById(TaskId: string): Promise<ITaskEntity | null>
  findByName(TaskName: string): Promise<ITaskEntity | null>
}
