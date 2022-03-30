import express from 'express';
import cors from 'cors';

const app = express();

// Enables CORS
app.use(cors({ origin: true }));

// Configure the Entity routes
const routes = express.Router();

// Add the routes to the /api endpoint
app.use('/apps', routes);

require('./updateApp').default(routes)

export default app;