import express from "express";

const PORT = 4000;

const app = express();

app.get("/", () => console.log("Somebody is trying to go home."));

// const handleHome = () => console.log("somebody is trying to go home.");
// app.get("/", handleHome);   <<<<<< same as 1 liner above

const handleListening = () => 
    console.log(`server Listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);

// app.listen(4000, () => console.log("server Listening on port 4000"));
// You can do it like above for a shorter way

