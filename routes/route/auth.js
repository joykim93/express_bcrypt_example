import express from 'express';
import { AuthController } from "../../controller/authController.js";

const authRoute = express.Router();

authRoute.post('/signup', AuthController.signup);
authRoute.post('/login', AuthController.login);

export default authRoute;