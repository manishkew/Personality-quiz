import { generateUserId } from "../utils/generateUserId.js";
import db from "../db.js";

export const createUserId = (req, res) => {
  const { name, dob, color, luckyNumber } = req.body;
  if (!name || !dob || !color || !luckyNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const userId = generateUserId({ name, dob, color, luckyNumber });
  res.json({ userId });
};

export const getResult = async (req, res) => {
  const { userId } = req.query;
  try {
    const [rows] = await db.query("SELECT result FROM users WHERE userId = ?", [
      userId,
    ]);
    if (rows.length > 0) {
      res.json({ result: rows[0].result });
    } else {
      res.status(404).json({ message: "Result not found" });
    }
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const saveResult = async (req, res) => {
  const { userId, result } = req.body;
  if (!userId || !result) {
    return res.status(400).json({ message: "userId and result are required" });
  }
  try {
    await db.query("INSERT INTO users (userId, result) VALUES (?, ?)", [
      userId,
      result,
    ]);
    res.json({ message: "Result saved successfully" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res
        .status(409)
        .json({ message: "Result already exists for this userId" });
    } else {
      console.error("DB Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
