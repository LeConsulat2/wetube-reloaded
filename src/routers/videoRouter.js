import express from 'express';
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from '../controllers/videoControllers';

console.log({ watch, getEdit, postEdit, getUpload, postUpload }); // Debugging line

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch); // 'id' must be numeric
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;
