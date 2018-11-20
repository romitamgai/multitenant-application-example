import knex from 'knex';

const knexConfig = {
  client: process.env.DB_CLIENT,
  connection: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
  },
  pool: { min: 2, max: 20 }
};

export default knex(knexConfig);
