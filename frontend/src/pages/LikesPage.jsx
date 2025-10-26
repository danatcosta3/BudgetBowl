import React from "react";
import NibbleCards from "../components/NibbleCards";
import MainHeader from "../components/MainHeader";

function LikesPage() {
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
  ];
  return (
    <div className="">
      <MainHeader />
      <div className="w-full px-6 py-6 bg-blue-400 text-prim-main-blue">
        <h1 className="font-mono text-3xl">Saved Meals</h1>
        <h2 className="font-mono pt-5 text-lg">X meals saved</h2>
      </div>
      <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user, index) => (
          <NibbleCards key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default LikesPage;
