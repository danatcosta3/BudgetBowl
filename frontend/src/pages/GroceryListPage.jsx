import React, { useState } from "react";
import MainHeader from "../components/MainHeader.jsx";
import MainFooter from "../components/MainFooter.jsx";
import { Plus, Trash2, Check } from "lucide-react";

function GroceryListPage() {
  const [groceryInput, setGroceryInput] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  // Add item to grocery list
  const handleAddItem = () => {
    if (groceryInput.trim() !== "") {
      const newItem = {
        id: Date.now(),
        name: groceryInput.trim(),
        checked: false,
      };
      setGroceryList([...groceryList, newItem]);
      setGroceryInput(""); // Clear input
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  // Toggle item checked status
  const handleToggleCheck = (id) => {
    setGroceryList(
      groceryList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Remove item from list
  const handleRemoveItem = (id) => {
    setGroceryList(groceryList.filter((item) => item.id !== id));
  };

  // Clear all checked items
  const handleClearChecked = () => {
    setGroceryList(groceryList.filter((item) => !item.checked));
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <MainHeader />

      <div className="w-full px-56 py-4 border-t border-prim-main-dark text-prim-main-blue">
        <h1 className="font-mono text-3xl">Grocery List</h1>
        <p className="font-mono text-sm mt-1">
          {groceryList.length} item{groceryList.length !== 1 ? "s" : ""} in your
          list
        </p>
      </div>

      <div className="flex-1 px-56 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-prim-main-blue mb-4">
              Add Items
            </h2>
            <div className="flex gap-3">
              <input
                type="text"
                value={groceryInput}
                onChange={(e) => setGroceryInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter grocery item..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-prim-main-dark transition"
              />
              <button
                onClick={handleAddItem}
                className="bg-prim-main-dark text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2 font-semibold"
              >
                <Plus className="w-5 h-5" />
                Add
              </button>
            </div>
          </div>

          {/* Grocery List */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-prim-main-blue">
                Your Items
              </h2>
              {groceryList.some((item) => item.checked) && (
                <button
                  onClick={handleClearChecked}
                  className="text-sm text-red-500 hover:text-red-700 transition"
                >
                  Clear Checked
                </button>
              )}
            </div>

            {groceryList.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No items in your grocery list yet.</p>
                <p className="text-sm mt-1">Add items above to get started!</p>
              </div>
            ) : (
              <ul className="space-y-2">
                {groceryList.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => handleToggleCheck(item.id)}
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition ${
                        item.checked
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 hover:border-prim-main-dark"
                      }`}
                    >
                      {item.checked && <Check className="w-4 h-4 text-white" />}
                    </button>

                    {/* Item Name */}
                    <span
                      className={`flex-1 ${
                        item.checked
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default GroceryListPage;
