import express from 'express';
import catRoutes from './api/routes/cat-routes.js';
import userRoutes from './api/routes/user-routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', userRoutes);

export default app;