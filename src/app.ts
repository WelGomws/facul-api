import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connection } from "./config/db";
import Routes from "./routes";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", Routes);

connection().then(() => {
  const server = app.listen(process.env.PORT, () => {
    console.log("server on!");
  });

  server.on("error", console.error);
});
