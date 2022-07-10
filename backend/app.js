import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/user", router);


mongoose.connect("mongodb+srv://Anu:Anu90@cluster0.h0hga.mongodb.net/WebApplication?retryWrites=true&w=majority")
.then(() => app.listen(5000))
.then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
)
.catch((err) => console.log(err));

