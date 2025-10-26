import React from "react";
import { Clock } from "lucide-react";

function NibbleCards({ name, ingredients, time, author, steps, image }) {
  return (
    <div className="border-4 border-prim-main-dark w-60 h-100 rounded-md shadow-lg overflow-hidden relative">
      <div className="relative">
        <img className="w-80 h-30 object-cover" src={image} alt="food" />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow">
          <Clock className="w-4 h-4 text-prim-main-blue" />
          <span className="font-mono text-xs text-prim-main-blue">
            {time} mins
          </span>
        </div>
      </div>
      <div className="pt-2 font-mono text-prim-main-blue">
        <h1 className="text-2xl">{name}</h1>
        <h2 className="pt-4 text-lg">By {author}</h2>
        <h3 className="pt-4 text-sm">{ingredients.length} ingredients</h3>
      </div>
    </div>
  );
}

export default NibbleCards;
