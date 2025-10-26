import React from "react";
import { Clock, Trash2 } from "lucide-react";

function ExpandedNibble({ name, ingredients, time, author, image, steps }) {
  return (
    <div className="bg-white max-w-60 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative">
      {/* Image Section */}
      <div className="relative h-72">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-prim-main-blue" />
          <span className="text-sm text-prim-main-blue">{time} min</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 ">
        <div className="absolute bottom-3 right-3">
          <Trash2 className="w-3.5 h-3.5 text-red-500 hover:text-red-700" />
        </div>
        <h3 className="text-lg text-prim-main-blue mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">by {author}</p>
        <span className="text-sm text-gray-600">
          {ingredients.length} ingredients
        </span>
      </div>
    </div>
  );
}

export default ExpandedNibble;
