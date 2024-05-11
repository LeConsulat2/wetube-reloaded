import express from "express";

const PORT = 4000;

const app = express();


const handleHome = (req, res) => {
    return res.send("<h1>I still love you</h1>");

}

const handleLogin = (req, res) => {
    return res.send("Login Here");
}

app.get("/", handleHome);  
app.get("/login", handleLogin)

// ^^^^^^ same as 1 liner above
// app.get("/", () => console.log("Somebody is trying to go home.")); 
const handleListening = () => 
    console.log(`server Listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);

// app.listen(4000, () => console.log("server Listening on port 4000"));
// You can do it like above for a shorter way

