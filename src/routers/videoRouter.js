// src/routers/videoRouter.js
import express from "express";
import { see, edit, search, upload, deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/search", search);
videoRouter.get("/upload", upload);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
