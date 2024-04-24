import { inject, injectable } from 'tsyringe';
import { BadRequestError } from '@crosscutting/helpers/error/BadRequestError';
import { sign } from 'jsonwebtoken';
import { IUserRepository } from '../repositories/IUserRepository';
import { IAuthenticateUserDTO, IAuthenticateUserResponseDTO } from '../dtos/IAuthenticateUserDTO';
import { HashStrategy } from '../utils/HashStrategy';

@injectable()
export class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: IAuthenticateUserDTO): Promise<IAuthenticateUserResponseDTO> {
    const foundUser = await this.userRepository.findByEmail(email);

    if (!foundUser) {
      throw new BadRequestError('E-mail ou senha incorretos');
    }

    const isCorrectPassword = await HashStrategy.compare({
      value: password,
      hashed: foundUser.password,
    });

    if (!isCorrectPassword) {
      throw new BadRequestError('E-mail ou senha incorretos');
    }

    const privateOrSecretKey = process.env.JWT_SECRET_KEY as string;

    const token = sign(
      {
        id: foundUser.id,
      },
      privateOrSecretKey,
      {
        expiresIn: '1d',
      },
    );

    return {
      user: {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      },
      token,
    };
  }
}
