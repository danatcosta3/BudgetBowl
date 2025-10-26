import React, { useState } from "react";
import MainHeader from "../components/MainHeader.jsx";
import MainFooter from "../components/MainFooter";
import NibbleCards from "../components/NibbleCards";
import ExpandedNibble from "../components/ExpandedNibble.jsx";

function FeedPage() {
  // State for expanded card
  const [selectedNibble, setSelectedNibble] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const users = [
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
    {
      name: "Beef Tacos",
      author: "Maria",
      time: 20,
      ingredients: [
        "Ground beef",
        "Taco shells",
        "Lettuce",
        "Cheese",
        "Tomatoes",
      ],
      steps: ["cook beef", "warm shells", "assemble tacos", "add toppings"],
      image: "beef-tacos.jpg",
    },
  ];

  // Handler to open expanded card
  const handleCardClick = (nibble) => {
    setSelectedNibble(nibble);
    setIsExpanded(true);
  };

  // Handler to close expanded card
  const handleClose = () => {
    setIsExpanded(false);
    setSelectedNibble(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <MainHeader />

      <div className="bg-blue-500 w-full h-auto px-56 py-6 border-t border-prim-main-dark text-prim-main-blue">
        <h1 className="font-mono text-3xl">Discover New Meals</h1>
      </div>

      <div className="flex-1 px-56 py-6">
        <div className="grid grid-cols-5 gap-4">
          {users.map((user, index) => (
            <div key={index} onClick={() => handleCardClick(user)}>
              <NibbleCards {...user} />
            </div>
          ))}
        </div>
      </div>

      <MainFooter />

      {/* Expanded Card Modal */}
      {isExpanded && selectedNibble && (
        <ExpandedNibble nibble={selectedNibble} onClose={handleClose} />
      )}
    </div>
  );
}

export default FeedPage;
