import express from 'express';
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from '../controllers/videoControllers';
console.log({ watch, getEdit, postEdit, getUpload, postUpload }); // Add this line to check the import

const videoRouter = express.Router();

videoRouter.get('/:id([0-9a-f]{24})', watch);
videoRouter.route('/:id([0-9a-f]{24})/edit').get(getEdit).post(postEdit);
videoRouter.route('/:id([0-9a-f]{24})/delete').get(getEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;
