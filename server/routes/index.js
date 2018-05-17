import requestsController from '../controllers/requestsController';


// default route
const routes = (app) => {
	// default route
	app.get('/', (req, res) => {
		res.status(200)
			.send('Welcome to Maintenance Tracker API');
	});

	app.post('/api/v1/users/request', requestsController.addRequest);
}
export default routes;