import connectDB from "./config/db";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/apiRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(5000, () => console.log("Server running on port 5000"));
