import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { Plus, Trash2, AlertCircle } from "lucide-react";

function ShelfPage() {
  const [ingredientInput, setIngredientInput] = useState("");
  const [pantryList, setPantryList] = useState([]);

  // Add ingredient to pantry
  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== "") {
      const newIngredient = {
        id: Date.now(),
        name: ingredientInput.trim(),
        runningLow: false,
      };
      setPantryList([...pantryList, newIngredient]);
      setIngredientInput(""); // Clear input
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddIngredient();
    }
  };

  // Toggle running low status
  const handleToggleRunningLow = (id) => {
    setPantryList(
      pantryList.map((item) =>
        item.id === id ? { ...item, runningLow: !item.runningLow } : item
      )
    );
  };

  // Remove ingredient from pantry
  const handleRemoveIngredient = (id) => {
    setPantryList(pantryList.filter((item) => item.id !== id));
  };

  // Clear all items
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear your entire pantry?")) {
      setPantryList([]);
    }
  };

  // Get count of running low items
  const runningLowCount = pantryList.filter((item) => item.runningLow).length;

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <MainHeader />

      <div className="w-full px-56 py-4 border-t border-prim-main-dark text-prim-main-blue">
        <h1 className="font-mono text-3xl">My Pantry</h1>
        <p className="font-mono text-sm mt-1">
          {pantryList.length} ingredient{pantryList.length !== 1 ? "s" : ""} in
          your pantry
          {runningLowCount > 0 && ` • ${runningLowCount} running low`}
        </p>
      </div>

      <div className="flex-1 px-56 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-prim-main-blue mb-4">
              Add Ingredients
            </h2>
            <div className="flex gap-3">
              <input
                type="text"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter ingredient you have..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-prim-main-dark transition"
              />
              <button
                onClick={handleAddIngredient}
                className="bg-prim-main-dark text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2 font-semibold"
              >
                <Plus className="w-5 h-5" />
                Add
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Track what ingredients you currently have at home
            </p>
          </div>

          {/* Pantry List */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-prim-main-blue">
                Your Pantry
              </h2>
              {pantryList.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-sm text-red-500 hover:text-red-700 transition"
                >
                  Clear All
                </button>
              )}
            </div>

            {pantryList.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>Your pantry is empty.</p>
                <p className="text-sm mt-1">
                  Add ingredients above to track what you have!
                </p>
              </div>
            ) : (
              <ul className="space-y-2">
                {pantryList.map((item) => (
                  <li
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group ${
                      item.runningLow
                        ? "bg-yellow-50 border border-yellow-200"
                        : ""
                    }`}
                  >
                    {/* Running Low Button */}
                    <button
                      onClick={() => handleToggleRunningLow(item.id)}
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition ${
                        item.runningLow
                          ? "bg-yellow-500 border-yellow-500"
                          : "border-gray-300 hover:border-yellow-500"
                      }`}
                      title="Mark as running low"
                    >
                      {item.runningLow && (
                        <AlertCircle className="w-4 h-4 text-white" />
                      )}
                    </button>

                    {/* Ingredient Name */}
                    <span
                      className={`flex-1 ${
                        item.runningLow
                          ? "text-yellow-700 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                      {item.runningLow && (
                        <span className="text-xs ml-2 text-yellow-600">
                          (running low)
                        </span>
                      )}
                    </span>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleRemoveIngredient(item.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Running Low Section */}
            {runningLowCount > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-yellow-700 mb-2">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-semibold">Running Low</span>
                </div>
                <p className="text-sm text-gray-600">
                  You have {runningLowCount} ingredient
                  {runningLowCount !== 1 ? "s" : ""} running low. Consider
                  adding {runningLowCount !== 1 ? "them" : "it"} to your grocery
                  list!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default ShelfPage;
