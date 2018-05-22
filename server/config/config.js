import dotenv from 'dotenv';

dotenv.config();
const configDevelopment = {
  database: process.env.DATABASE_URL,
};

const configTest = {
  database: process.env.DATABASE_URL,
};
export default { configDevelopment, configTest };

