import 'babel-polyfill';
import Express from 'express';
// importing bodyparser
import bodyParser from 'body-parser';
// importring routes module
import routes from './routes/index';

const app = new Express();


const port = process.env.PORT || 8020;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false,
}));
routes(app);

app.listen(port);
// Console message
console.log(`server is running at http://localhost:${port}`);

export default app;
