import { routes as users } from '@modules/users/infra/http/routes/user.routes';
import { routes as tasks } from '@modules/tasks/infra/http/routes/task.routes';

import { Router } from 'express';

import swagger from 'swagger-ui-express';
import swaggerConfig from '../../../docs';

export const routes = Router();

routes.use('/docs', swagger.serve);
routes.get('/docs', swagger.setup(swaggerConfig));
routes.use('/health', (req, res) => res.status(200).send());

routes.use('/users/', users);
routes.use('/tasks/', tasks);
