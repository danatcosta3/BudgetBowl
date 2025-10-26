import React from "react";
import { X, Clock, User, Check } from "lucide-react";
import axios from "axios";

function ExpandedNibble({ nibble, onClose, isModal = true, onSave, onPass }) {
  // Safety check
  if (!nibble) {
    return null;
  }

  const cardContent = (
    <div
      className={`bg-white rounded-2xl shadow-2xl ${
        isModal
          ? "max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          : "w-full max-w-6xl"
      }`}
      onClick={(e) => isModal && e.stopPropagation()}
    >
      {/* Close button - only show in modal mode */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {/* Feed Mode - Two Column Layout (fits on screen) */}
      {!isModal ? (
        <div className="grid grid-cols-2 gap-6 p-6">
          {/* Left Side - Image */}
          <div className="relative h-[450px] rounded-xl overflow-hidden">
            <img
              src={nibble.image}
              alt={nibble.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
              <Clock className="w-4 h-4 text-prim-main-blue" />
              <span className="text-sm font-semibold text-prim-main-blue">
                {nibble.time} mins
              </span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Title and Author */}
              <h2 className="text-3xl font-bold text-prim-main-blue mb-1">
                {nibble.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <User className="w-4 h-4" />
                <span className="text-sm">by {nibble.author}</span>
              </div>

              {/* Ingredients */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-prim-main-blue mb-2">
                  Ingredients
                </h3>
                <ul className="space-y-1.5">
                  {nibble.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-prim-main-dark rounded-full"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h3 className="text-lg font-semibold text-prim-main-blue mb-2">
                  Instructions
                </h3>
                <ol className="space-y-2">
                  {nibble.steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-gray-700 text-sm"
                    >
                      <span className="flex-shrink-0 w-5 h-5 bg-prim-main-dark text-white rounded-full flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 capitalize">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Action Buttons - Feed Mode */}
            {(onSave || onPass) && (
              <div className="flex gap-6 justify-center mt-6 pt-4 border-t border-gray-200">
                {/* Pass Button (X) */}
                {onPass && (
                  <button
                    onClick={onPass}
                    className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                    title="Pass"
                  >
                    <X className="w-8 h-8" />
                  </button>
                )}

                {/* Save Button (Check) */}
                {onSave && (
                  <button
                    onClick={onSave}
                    className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                    title="Save"
                  >
                    <Check className="w-8 h-8" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Modal Mode - Original Single Column Layout (scrollable) */
        <>
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
                    <span className="pt-0.5 capitalize">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* "Recipe Saved" button for modal */}
            <div className="mt-6 flex gap-3">
              <div className="flex-1 bg-prim-main-dark text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition text-center">
                Recipe Saved
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // If modal mode, wrap in overlay
  if (isModal) {
    return (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {cardContent}
      </div>
    );
  }

  // If feed mode, return card without overlay
  return cardContent;
}

export default ExpandedNibble;
