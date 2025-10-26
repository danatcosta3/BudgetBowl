import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: String,
  author: String,
  time: Number,
  ingredients: [String],
  steps: [String],
  image: String,
});

const Meal = mongoose.model("Meals", mealSchema);

export default Meal;
