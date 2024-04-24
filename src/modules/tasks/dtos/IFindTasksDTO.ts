import { IPaginatedParamsDTO, IPaginatedResponseDTO } from '@modules/shared/dtos/IPaginatedDTO';
import { ITaskEntity } from '../domain/ITaskEntity';

export interface IFindTasksDTO extends IPaginatedParamsDTO {
  search?: string
  sort?: string[]
}

export type IFindTasksResponseDTO = IPaginatedResponseDTO<ITaskEntity>;
