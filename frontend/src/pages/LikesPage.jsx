import React, { useState } from "react";
import NibbleCards from "../components/NibbleCards";
import ExpandedNibble from "../components/ExpandedNibble";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

function LikesPage() {
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
      time: 20,
      ingredients: ["Pasta", "Chicken", "Oil", "Spices", "sauce"],
      steps: ["boil pasta", "grill chicken", "add chicken", "add sauce"],
      image: "ChickenAlfredo.jpg",
    },
    {
      name: "Chicken Quesadilla",
      author: "Dana",
      time: 10,
      ingredients: ["Tortilla", "Chicken", "Oil", "Spices", "Cheese"],
      steps: [
        "Heat tortilla",
        "grill chicken",
        "add chicken",
        "add cheese",
        "melt and fold",
      ],
      image: "quesadilla.jpg",
    },
  ];

  const handleCardClick = (nibble) => {
    setSelectedNibble(nibble);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSelectedNibble(null);
  };

  return (
    <div className="">
      <MainHeader />
      <div className="w-full px-56 py-6 text-prim-main-blue">
        <h1 className="font-mono text-3xl">Saved Meals</h1>
        <h2 className="font-mono pt-5 text-lg">{users.length} meals saved</h2>
      </div>
      <div className="px-56 blue py-6 grid grid-cols-5 gap-x-4">
        {users.map((user, index) => (
          <div key={index} onClick={() => handleCardClick(user)}>
            <NibbleCards {...user} />
          </div>
        ))}
      </div>
      <MainFooter />

      {/* Expanded Card Modal */}
      {isExpanded && selectedNibble && (
        <ExpandedNibble nibble={selectedNibble} onClose={handleClose} />
      )}
    </div>
  );
}

export default LikesPage;
