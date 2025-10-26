import React, { useState } from "react";
import MainHeader from "../components/MainHeader.jsx";
import MainFooter from "../components/MainFooter";
import ExpandedNibble from "../components/ExpandedNibble.jsx";

function FeedPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedMeals, setSavedMeals] = useState([]);

  const meals = [
    {
      name: "Chicken tikka",
      author: "Shrey",
      time: 15,
      ingredients: ["Chicken", "yogurt", "spices"],
      steps: ["marinate chicken", "grill chicken", "serve"],
      image: "chicken-tikka-masala.jpg",
    },
    {
      name: "Chicken Alfredo",
      author: "Noah",
      time: 15,
      ingredients: ["Pasta", "Chicken", "Oil", "Spices", "sauce"],
      steps: ["boil pasta", "grill chicken", "add chicken", "add sauce"],
      image: "ChickenAlfredo.jpg",
    },
  ];

  // Handle Save (checkmark)
  const handleSave = () => {
    setSavedMeals([...savedMeals, meals[currentIndex]]);
    goToNext();
  };

  // Handle Pass (X)
  const handlePass = () => {
    goToNext();
  };

  // Go to next meal
  const goToNext = () => {
    if (currentIndex < meals.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const currentMeal = meals[currentIndex];

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50 overflow-hidden">
      <MainHeader />

      <div className="w-full px-56 py-8 border-t border-prim-main-dark text-prim-main-blue flex-shrink-0">
        <h1 className="font-mono text-2xl">Discover New Meals</h1>
      </div>

      <div className="flex-1 flex items-center justify-center pb-40 px-20 py-4 min-h-0">
        {currentMeal ? (
          <ExpandedNibble
            nibble={currentMeal}
            isModal={false}
            onSave={handleSave}
            onPass={handlePass}
          />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl text-gray-600">
              No more meals to discover!
            </h2>
            <p className="text-gray-500 mt-2">
              Check back later for new recipes
            </p>
          </div>
        )}
      </div>

      <MainFooter />
    </div>
  );
}

export default FeedPage;
