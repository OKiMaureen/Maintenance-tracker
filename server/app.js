import cors from 'cors';
import logger from 'morgan';
import winston from 'winston';
import bodyParser from 'body-parser';
import Express from 'express';
import routes from './routes/index';

const app = new Express();


const port = process.env.PORT || 3000;
app.use(cors());
app.use(logger('development'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false,
}));
routes(app);
app.use('/client', Express.static('public'));
if (!module.parent) {
  app.listen(port);
}


winston.log(`server is running at http://localhost:${port}`);

export default app;
