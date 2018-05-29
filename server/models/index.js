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
console.log(config);
const client = new Client(config);
client.connect();

client.connect();
client.query(queries, (error) => {
  console.log(error);
  client.end();
});
