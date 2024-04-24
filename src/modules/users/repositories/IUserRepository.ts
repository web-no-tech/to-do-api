import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { IUserEntity } from '../domain/IUserEntity';

export interface IUserRepository {
  findById(userId: string): Promise<IUserEntity | null>
  findByEmail(userEmail: string): Promise<IUserEntity | null>
  update(data: IUpdateUserDTO): Promise<IUserEntity>
}
