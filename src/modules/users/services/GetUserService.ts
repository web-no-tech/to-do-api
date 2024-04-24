import { inject, injectable } from 'tsyringe';
import { NotFoundError } from '@crosscutting/helpers/error/NotFoundError';
import { IUserRepository } from '../repositories/IUserRepository';
import { IGetUserResponseDTO } from '../dtos/IGetUserDTO';

@injectable()
export class GetUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(userId: string): Promise<IGetUserResponseDTO> {
    const foundUser = await this.userRepository.findById(userId);

    if (!foundUser) {
      throw new NotFoundError('Usuário não encontrado');
    }

    return {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      createdAt: foundUser.createdAt,
      updatedAt: foundUser.updatedAt,
    };
  }
}
