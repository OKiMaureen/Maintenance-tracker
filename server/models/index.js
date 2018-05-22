import { Client } from 'pg';
import configTest from '../config/config-test';
import configDev from '../config/config';
import queries from './database';


let config;
if (process.env.NODE_ENV === 'development') {
  config = configDev;
} else {
  config = configTest;
}
const client = new Client(config);

client.connect();

client.query(queries, () => {
  client.end();
});
