// src/routers/globalRouter.js
import express from "express";
import { join } from "../controllers/userControllers";
import { trending } from "../controllers/videoControllers";  // Use `trending`

const globalRouter = express.Router();

console.log({ join, trending });  // Debugging line

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
