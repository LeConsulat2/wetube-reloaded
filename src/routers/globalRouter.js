import express from "express";
import { join } from "../controllers/userControllers";
import { trainingVideos } from "../controllers/videoControllers";  

const globalRouter = express.Router();


globalRouter.get("/", trainingVideos);
globalRouter.get("/join", join);


export default globalRouter;