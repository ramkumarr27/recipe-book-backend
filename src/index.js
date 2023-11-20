import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";


const app = express();
dotenv.config()

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://chitraramkumar27:MERNpassword123@recipe.3eo2vxt.mongodb.net/recipe?retryWrites=true&w=majority");

app.listen(3001, () => 
console.log("Server started..!")
);

// process.env.MONGO_URL