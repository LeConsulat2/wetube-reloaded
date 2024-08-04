// src/routers/globalRouter.js
import express from 'express';
import { getJoin, login, postJoin } from '../controllers/userControllers';
import { home, search } from '../controllers/videoControllers';

const globalRouter = express.Router();

console.log({ getJoin, home }); // Debugging line

globalRouter.get('/', home);
globalRouter.get('/join').get(getJoin).post(postJoin);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter;
