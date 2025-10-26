import Meals from "../models/Meals.js";
import Users from "../models/Users.js";

export const getMeals = async (req, res) => {
  try {
    const meals = await Meals.find();
    res.status(200).json({
      message: "Meals retrieved successfully",
      meals,
    });
  } catch (error) {
    console.error("Error fetching meals:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const save = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);

    if (!user) {
      return res.status(401).json({ message: "Access denied. No user found." });
    }

    const { mealId } = req.body;

    if (user.likes.includes(mealId)) {
      return res.status(400).json({ message: "Meal already liked." });
    }

    user.likes.push(mealId);
    await user.save();

    res.status(200).json({
      message: "Meal added to likes successfully",
      likes: user.likes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getLikes = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).populate("likes");

    if (!user) {
      return res.status(401).json({ message: "Access denied. No user found." });
    }

    res.status(200).json({
      message: "Retrieved Saved Meals",
      likes: user.likes,
    });
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
