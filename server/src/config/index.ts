import * as app from './app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knex = require('../../knexfile');

export default {
  app,
  knex,
};
