import express from "express";
import {
  createUserId,
  getResult,
  saveResult,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/generate-id", createUserId);
router.get("/result", getResult);
router.post("/result", saveResult);

export default router;
