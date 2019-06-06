import {router as songRouter} from "./routes/song"
import express from "express";

const server = express();

server.use("/songs", songRouter);

server.listen(3000, err => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3000");
});
