/* eslint-disable no-console */

import express from 'express';
import { Model } from 'objection';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config';
import routes from './routes';
import knex from './knex';

Model.knex(knex);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/rest/v1/', routes);
app.get('/ping', (_, res) => res.json('pong'));

app.listen(config.app.port, () => {
  console.log(`Application started at http://localhost:${config.app.port}`);
});
