import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ListCheck,
  ShoppingCart,
  PlusCircle,
  House,
} from "lucide-react";

function MainFooter() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 fixed bottom-0 w-full shadow-lg">
      <nav className="flex justify-evenly items-center py-4 px-4 max-w-7xl mx-auto">
        {/* Home */}
        <Link
          to="/Feed"
          className="flex flex-col items-center gap-1 hover:text-prim-main-dark transition"
        >
          <House className="w-6 h-6" />
          <span className="text-xs">feed</span>
        </Link>

        {/* Saved */}
        <Link
          to="/like"
          className="flex flex-col items-center gap-1 hover:text-prim-main-dark transition"
        >
          <Heart className="w-6 h-6" />
          <span className="text-xs">saved</span>
        </Link>

        {/* Post */}
        <Link
          to="/upload"
          className="flex flex-col items-center gap-1 hover:text-prim-main-dark transition"
        >
          <PlusCircle className="w-6 h-6" />
          <span className="text-xs">post</span>
        </Link>

        {/* Groceries */}
        <Link
          to="/groceries"
          className="flex flex-col items-center gap-1 hover:text-prim-main-dark transition"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs">groceries</span>
        </Link>

        {/* Pantry */}
        <Link
          to="/pantry"
          className="flex flex-col items-center gap-1 hover:text-prim-main-dark transition"
        >
          <ListCheck className="w-6 h-6" />
          <span className="text-xs">pantry</span>
        </Link>
      </nav>
    </footer>
  );
}

export default MainFooter;
