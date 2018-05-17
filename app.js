// Importing express
import express from 'express';

// Defining the Port Variable
const port = process.env.PORT || 8020;

// Instantiating express
const app = new express();

// Starting up the server
app.listen(port);

// Console message
console.log(`server is running at http://localhost:${port}`);

export default app;
