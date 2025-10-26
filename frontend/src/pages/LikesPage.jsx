import React from "react";
import NibbleCards from "../components/NibbleCards";

function LikesPage() {
  const users = [
    {
      name: "chicken tikka",
      author: "Shrey",
      time: 15,
      ingredients: ["chicken", "yogurt", "spices"],
      steps: ["marinate chicken", "grill chicken", "serve"],
      image: "chicken-tikka-masala.jpg",
    },
  ];
  return (
    <div className="grid pl-40 grid-cols-1 grid-rows-3 gap-6">
      {users.map((user, index) => (
        <NibbleCards key={index} {...user} />
      ))}
    </div>
  );
}

export default LikesPage;
