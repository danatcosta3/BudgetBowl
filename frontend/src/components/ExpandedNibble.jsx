import React from "react";
import { X, Clock, User } from "lucide-react";

function ExpandedNibbleCard({ nibble, onClose }) {
  return (
    // Dark overlay
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose} // Click overlay to close
    >
      {/* Card container */}
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Image */}
        <div className="relative h-64 w-full">
          <img
            src={nibble.image}
            alt={nibble.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
            <Clock className="w-5 h-5 text-prim-main-blue" />
            <span className="text-sm font-semibold text-prim-main-blue">
              {nibble.time} mins
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Author */}
          <h2 className="text-3xl font-bold text-prim-main-blue mb-2">
            {nibble.name}
          </h2>
          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <User className="w-4 h-4" />
            <span>by {nibble.author}</span>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-prim-main-blue mb-3">
              Ingredients
            </h3>
            <ul className="space-y-2">
              {nibble.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-prim-main-dark rounded-full"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="text-xl font-semibold text-prim-main-blue mb-3">
              Instructions
            </h3>
            <ol className="space-y-3">
              {nibble.steps.map((step, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-prim-main-dark text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex gap-3">
            <div className="flex-1 bg-prim-main-dark text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition text-center">
              Recipe Saved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedNibbleCard;
