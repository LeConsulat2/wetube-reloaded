// src/routers/globalRouter.js
import express from 'express';
import { join, login } from '../controllers/userControllers';
import { home } from '../controllers/videoControllers';

const globalRouter = express.Router();

console.log({ join, home }); // Debugging line

globalRouter.get('/', home);
globalRouter.get('/join', join);
globalRouter.get('/login', login);

export default globalRouter;
