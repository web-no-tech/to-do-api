/* eslint-disable no-console */
import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import '@crosscutting/container';

import { DataSource, DataSourceOptions } from 'typeorm';

import { join } from 'path';

import { TaskEntity } from '@modules/tasks/infra/typeorm/entities/TaskEntity';
import { UserEntity } from '@modules/users/infra/typeorm/entities/UserEntity';

const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    TaskEntity,
    UserEntity,
  ],
  migrations: [
    join(__dirname, 'migrations', '**.{ts,js}'),
  ],
};

export const AppDataSource = new DataSource(options);

AppDataSource.initialize();
