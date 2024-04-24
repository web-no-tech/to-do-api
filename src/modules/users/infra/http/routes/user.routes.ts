import { Router } from 'express';

import { authenticated } from '@crosscutting/middlewares/auth';
import { UpdateUserController } from '../controllers/UpdateUserController';
import { GetUserController } from '../controllers/GetUserController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const updateUserController = new UpdateUserController();
const getUserController = new GetUserController();
const authenticateUserController = new AuthenticateUserController();

export const routes = Router();

routes.patch(
  UpdateUserController.route,
  authenticated,
  UpdateUserController.validator,
  updateUserController.handle,
);

routes.get(
  GetUserController.route,
  authenticated,
  GetUserController.validator,
  getUserController.handle,
);

routes.post(
  AuthenticateUserController.route,
  AuthenticateUserController.validator,
  authenticateUserController.handle,
);
