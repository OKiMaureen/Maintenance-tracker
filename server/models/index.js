import dotenv from 'dotenv';
import { Client } from 'pg';
import configurations from '../config/config';
import queries from './database';

dotenv.config();

let config;
if (process.env.NODE_ENV === 'production') {
  config = configurations.production;
} else if (process.env.NODE_ENV === 'test') {
  config = configurations.test;
} else {
  config = configurations.development;
}
const client = new Client(config);
client.connect();
client.query(queries, () => {
  client.end();
});
