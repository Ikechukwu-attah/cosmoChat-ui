import express from "express";
import { chatRequest } from "../controller/chat.controller.js";

const router = express.Router();

router.post("/chat", chatRequest);

export default router;
