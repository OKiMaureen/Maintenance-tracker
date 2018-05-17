// default route
const routes = (app) => {
    // default route
    app.get('/', (req, res) => {
      res.status(200)
        .send('Welcome to Maintenance Tracker API');
    });
}
export default routes;