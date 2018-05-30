import winston from 'winston';
import bodyParser from 'body-parser';
import Express from 'express';
import routes from './routes/index';


const app = new Express();


const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false,
}));
routes(app);
app.listen(port);


winston.log(`server is running at http://localhost:${port}`);

export default app;
