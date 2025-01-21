import express from "express";
import { StatusCodes } from "http-status-codes";

import connectDB from "./config/dbConfig.js";
import { PORT } from "./config/serverConfig.js";
import apiRouter from './routes/apiRouter.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',apiRouter)
app.get("/ping", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Hi Server Gaurav!" });
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
  connectDB();
});
