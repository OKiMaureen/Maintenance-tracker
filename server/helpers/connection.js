import dotenv from 'dotenv';
import { Client } from 'pg';
import configurations from '../config/config';


dotenv.config();
let config;
const connection = () => {
  if (process.env.NODE_ENV === 'development') {
    config = configurations.development;
  } else {
    config = configurations.test;
  }
  const client = new Client(config);
  return client;
};
export default connection;
