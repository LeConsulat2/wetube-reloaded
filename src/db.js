import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db = mongoose.connection;

db.on("error", (error) => console.log("❌ DB Error:", error));
db.once("open", () => console.log("✅ Connected to DB"));



//OR  YOU COULD MAKE THE CODE BETTER AS BELOW//
// const handleOpen = () => console.log("✅ Connected to DB");
// const handleError = (error) => console.log("❌ DB Error", error);

// db.on("error", handleError);
// db.once("open", handleOpen);

