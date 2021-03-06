import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  test: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  production: {
    database: process.env.DATABASE_URL,

  },
};
