// src/routers/globalRouter.js
import express from 'express';
import { join, login } from '../controllers/userControllers';
import { trending, search } from '../controllers/videoControllers';

const globalRouter = express.Router();

console.log({ join, trending }); // Debugging line

globalRouter.get('/', trending);
globalRouter.get('/join', join);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter;
