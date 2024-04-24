/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';

import { handleError } from '@crosscutting/middlewares/error';

import { AppDataSource } from '../typeorm';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', routes);
app.use(handleError);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected!');

    const { APP_PORT } = process.env;
    return app.listen(APP_PORT, () => console.log('Server is running on port', APP_PORT));
  })
  .catch((err) => {
    console.log('Error during Data Source initialization', err);
  });
