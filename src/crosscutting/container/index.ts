import { container } from 'tsyringe';

import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { TaskRepository } from '@modules/tasks/infra/typeorm/repositories/TaskRepository';
import { ITaskRepository } from '@modules/tasks/repositories/ITaskRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);
