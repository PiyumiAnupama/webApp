import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose.connect("mongodb+srv://Anu:Anu90@cluster0.h0hga.mongodb.net/WebApplication?retryWrites=true&w=majority")
.then(() => app.listen(5000))
.then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
)
.catch((err) => console.log(err));

