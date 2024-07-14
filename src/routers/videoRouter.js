// src/routers/videoRouter.js
import express from 'express';
import { watch, getEdit, postEdit } from '../controllers/videoControllers';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch); // 'id' must be numeric
videoRouter.get('/:id(\\d+)/edit', getEdit); // 'id' must be numeric
videoRouter.post('/:id(\\d+)/edit', postEdit);

export default videoRouter;
