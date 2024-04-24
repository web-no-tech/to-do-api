import { inject, injectable } from 'tsyringe';

import { NotFoundError } from '@crosscutting/helpers/error/NotFoundError';
import { BadRequestError } from '@crosscutting/helpers/error/BadRequestError';

import { IUserRepository } from '../repositories/IUserRepository';
import { IUpdateUserDTO, IUpdateUserResponseDTO } from '../dtos/IUpdateUserDTO';

import { HashStrategy } from '../utils/HashStrategy';

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute({
    id,
    name,
    email,
    password,
    confirmPassword,
  }: IUpdateUserDTO): Promise<IUpdateUserResponseDTO> {
    const foundUser = await this.userRepository.findById(id);

    if (!foundUser) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    if (email && email !== foundUser.email) {
      const userWithSameEmail = await this.userRepository.findByEmail(email);

      if (userWithSameEmail) {
        throw new BadRequestError('E-mail já cadastrado.');
      }
    }

    if (password) {
      if (password !== confirmPassword) {
        throw new BadRequestError('A senha e a confirmação devem ser iguais.');
      }

      const hashedPassword = await HashStrategy.generate(password);

      // eslint-disable-next-line no-param-reassign
      password = hashedPassword;
    }

    const updatedUser = await this.userRepository.update({
      id,
      name,
      email,
      password,
    });

    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      updatedAt: updatedUser.updatedAt,
    };
  }
}
