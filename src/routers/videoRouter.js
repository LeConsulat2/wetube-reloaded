// src/routers/videoRouter.js
import express from 'express';
import { watch, getEdit, postEdit } from '../controllers/videoControllers';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch); // 'id' must be numeric
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);

export default videoRouter;
