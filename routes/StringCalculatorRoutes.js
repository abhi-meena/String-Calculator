import { addNumbers } from "../controllers/StringCalculatorController.js";
import express from "express";

const router = express.Router();

router.post("/add", addNumbers);

export default router;