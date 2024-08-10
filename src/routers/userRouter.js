import express from 'express';
import {
  edit,
  remove,
  logout,
  search,
  startGithubLogin,
  finishGithubLogin,
} from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/delete', remove);
userRouter.get('/github/start', startGithubLogin);
userRouter.get('github/finish', finishGithubLogin);
userRouter.get(':id', search);

export default userRouter;
