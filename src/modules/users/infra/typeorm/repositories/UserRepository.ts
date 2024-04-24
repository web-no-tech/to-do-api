import { Repository } from 'typeorm';

import { IUserEntity } from '@modules/users/domain/IUserEntity';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { IUpdateUserDTO } from '@modules/users/dtos/IUpdateUserDTO';

import { AppDataSource } from '@crosscutting/infra/typeorm';
import { UserEntity } from '../entities/UserEntity';

export class UserRepository implements IUserRepository {
  private repository: Repository<IUserEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserEntity);
  }

  async update(data: IUpdateUserDTO) {
    return this.repository.save(data);
  }

  async findById(userId: string): Promise<IUserEntity | null> {
    return this.repository.findOneBy({ id: userId });
  }

  async findByEmail(userEmail: string): Promise<IUserEntity | null> {
    return this.repository.findOneBy({ email: userEmail });
  }
}
