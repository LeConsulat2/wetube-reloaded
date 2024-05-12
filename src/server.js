import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger);

// Routers
// Handler functions
// Global routes

// Apply routers
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);  // Starts the server on port 4000
