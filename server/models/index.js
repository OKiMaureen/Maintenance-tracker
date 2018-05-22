import { Client } from 'pg';
import { configDevelopment, configTest } from '../config/config';
import queries from './database';


let config;
if (process.env.NODE_ENV === 'development') {
  config = configDevelopment;
} else {
  config = configTest;
}
const client = new Client(config);

client.connect();

client.query(queries, () => {
  client.end();
});
