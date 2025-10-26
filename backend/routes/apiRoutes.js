import express from "express";
import { registerUser, login } from "../controllers/userAuth.js";
import { getMeals, save, getLikes } from "../controllers/mealController.js";
import authenticateToken from "../middleware/authenticateToken.js";

//import { uploadToS3 } from "../controllers/amazonAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
//router.post("/upload", uploadToS3);
router.get("/getmeals", authenticateToken, getMeals);
router.post("/save", authenticateToken, save);
router.get("/getlikes", authenticateToken, getLikes);

export default router;
