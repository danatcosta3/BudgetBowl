import express from "express";
import { registerUser, login, logout, check } from "../controllers/userAuth.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/check", verifyToken, check);
router.post("/logout", logout);
export default router;
