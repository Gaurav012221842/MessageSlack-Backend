import express from "express";
import { StatusCodes } from "http-status-codes";

import { PORT } from "./config/serverConfig.js";


const app = express();
app.get("/ping", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Hi Server Gaurav!" });
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
