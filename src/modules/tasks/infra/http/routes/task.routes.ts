import { Router } from 'express';
import { authenticated } from '@crosscutting/middlewares/auth';
import { CreateTaskController } from '../controllers/CreateTaskController';
import { UpdateTaskController } from '../controllers/UpdateTaskController';
import { GetTaskController } from '../controllers/GetTaskController';
import { FindTasksController } from '../controllers/FindTasksController';
import { DeleteTaskController } from '../controllers/DeleteTaskController';
import { ToggleConcludedTaskController } from '../controllers/ToggleConcludedTaskController';

export const routes = Router();

const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const toggleConcludedTaskController = new ToggleConcludedTaskController();
const getTaskController = new GetTaskController();
const findTasksController = new FindTasksController();
const deleteTaskController = new DeleteTaskController();

routes.post(
  CreateTaskController.route,
  authenticated,
  CreateTaskController.validator,
  createTaskController.handle,
);

routes.patch(
  UpdateTaskController.route,
  authenticated,
  UpdateTaskController.validator,
  updateTaskController.handle,
);

routes.patch(
  ToggleConcludedTaskController.route,
  authenticated,
  ToggleConcludedTaskController.validator,
  toggleConcludedTaskController.handle,
);

routes.get(
  GetTaskController.route,
  GetTaskController.validator,
  getTaskController.handle,
);

routes.get(
  FindTasksController.route,
  FindTasksController.validator,
  findTasksController.handle,
);

routes.delete(
  DeleteTaskController.route,
  authenticated,
  DeleteTaskController.validator,
  deleteTaskController.handle,
);
