import dotenv from 'dotenv';
import { Client } from 'pg';
import configurations from '../config/config';
import queries from './database';

dotenv.config();
let config;
if (process.env.NODE_ENV === 'development') {
  config = configurations.development;
} else {
  config = configurations.test;
}
const client = new Client(config);
client.connect();
client.query(queries, () => {
  client.end();
});
