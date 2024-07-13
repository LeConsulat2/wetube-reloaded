import express from 'express';
import { edit, remove } from '../controllers/userControllers';

const userRouter = express.Router();

globalRouter.get('/edit', edit);
globalRouter.get('/remove', remove);

export default userRouter;
