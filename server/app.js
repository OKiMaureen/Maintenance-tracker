import cors from 'cors';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import Express from 'express';
import routes from './routes/index';

const app = new Express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(logger('development'));
app.use(bodyParser.json());

app.get('/docs', (request, response) => response.redirect('https://app.swaggerhub.com/apis/maureen-api/Maintenance-tracker-api/1.0.0'));

app.use(bodyParser.urlencoded({
  extended: false,
}));
routes(app);
app.use(Express.static(path.join(__dirname, '../client-dist')));

if (!module.parent) {
  app.listen(port, () => console.log(`Server running on port: ${port}`));
}

app.all('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client-dist', 'index.html')));

// winston.log(`server is running at http://localhost:${port}`);

export default app;
