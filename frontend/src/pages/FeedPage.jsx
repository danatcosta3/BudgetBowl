import React from "react";
import MainHeader from "../components/MainHeader.jsx";
import MainFooter from "../components/MainFooter";
import ExpandedNibble from "../components/ExpandedNibble.jsx";

function FeedPage() {
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
      name: "Chicken Alfredo",
      author: "Noah",
      time: 15,
      ingredients: ["Pasta", "Chicken", "Oil", "Spices", "sauce"],
      steps: ["boil pasta", "grill chicken", "add chicken", "add sauce"],
      image: "ChickenAlfredo.jpg",
    },
  ];
  return (
    <div className="w-full h-screen ">
      <MainHeader />
      <div className=" bg-blue-500 w-75% h-auto px-56 py-6  border-t border-prim-main-dark text-prim-main-blue">
        <h1 className="font-mono text-3xl">Live Feed</h1>
      </div>
      <div className="px-56 py-6 grid grid-cols-5 gap-x-4">
        {users.map((user, index) => (
          <ExpandedNibble key={index} {...user} />
        ))}
      </div>
      <MainFooter />
    </div>
  );
}

export default FeedPage;
