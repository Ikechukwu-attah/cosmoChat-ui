import dotenv from "dotenv";
import express from "express";
import routerChat from "./routes/chat.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
const corsOrigin = {
  origin: "http://localhost:3000", //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));
// app.use(cors());

app.use("/api", routerChat);

app.listen(8085, () => console.log("Server running "));
