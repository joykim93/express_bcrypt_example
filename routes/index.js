import express from 'express';
import authRoute from './route/auth.js';

const indexRoute = express.Router();

indexRoute.use('/auth', authRoute);

export default indexRoute;