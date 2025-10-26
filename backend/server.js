import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/apiRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.options(/.*/, cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

app.listen(5001, () => console.log("Server running on port 5001"));
