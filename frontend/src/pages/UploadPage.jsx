import React, { use } from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { useState } from "react";
import MainFooter from "../components/MainFooter";

export default function UploadPage() {
  const [mealName, setMealName] = useState("");
  const [etaMinutes, setEtaMinutes] = useState("15");
  const [image, setImage] = useState([""]);
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [touched, setTouched] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainHeader />
      <MainFooter />
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Share a Meal
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Help fellow students eat well on a budget
        </p>

        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meal Name
            </label>
            <input
              type="text"
              placeholder="e.g. Quick Pasta Carbonara"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estimated Time (minutes)
            </label>
            <input
              type="number"
              placeholder="15"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Add Photo
              </label>
            </div>
            {image.map((_, idx) => (
              <input
                key={idx}
                type="url"
                placeholder="Image URL"
                className="mt-1 mb-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              />
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Ingredients
              </label>
              <button
                type="button"
                onClick={() => setIngredients([...ingredients, ""])}
                className="text-sm text-teal-700 hover:underline"
              >
                + Add
              </button>
            </div>
            {ingredients.map((ingredient, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Ingredient ${idx + 1}`}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
                {ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const newIngredients = [...ingredients];
                      newIngredients.splice(idx, 1);
                      setIngredients(newIngredients);
                    }}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Preparation Steps
              </label>
              <button
                type="button"
                onClick={() => setSteps([...steps, ""])}
                className="text-sm text-teal-700 hover:underline"
              >
                + Add Step
              </button>
            </div>
            {steps.map((_, idx) => (
              <div key={idx} className="flex items-start gap-3 mb-3">
                <div className="h-6 w-6 bg-teal-700 text-white rounded-full text-xs flex items-center justify-center">
                  {idx + 1}
                </div>
                <textarea
                  placeholder={`Step ${idx + 1}`}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                ></textarea>
              </div>
            ))}
          </div>

          <button className="w-full bg-teal-800 text-white py-2.5 rounded-lg font-medium hover:bg-teal-900 transition">
            Post Meal
          </button>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
