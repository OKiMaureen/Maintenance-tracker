// Importing express
import Express from 'express';
// importing bodyparser
import bodyParser from 'body-parser';
// importring routes module
import routes from './routes/index';


// Instantiating express
const app = new Express();

// Defining the Port Variable
const port = process.env.PORT || 8020;

// Registering middlewear bodyparser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false,
}));
routes(app);

// Starting up the server
app.listen(port);

// Console message
console.log(`server is running at http://localhost:${port}`);

export default app;
