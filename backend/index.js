import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors())
dotenv.config();

const Port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("DB connected Succesfully");
    app.listen(Port, () => {
      console.log(`Server is running on ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api",route); 


