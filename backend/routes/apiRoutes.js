import express from "express";
import { registerUser, login } from "../controllers/userAuth";
import { uploadToS3 } from "../controllers/amazonAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/upload", uploadToS3);

export default router;
