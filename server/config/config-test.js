import dotenv from 'dotenv';

dotenv.config();

const config = {
  database: process.env.DATABASE_TEST_URL,
};
export default config;
