import React from "react";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
<<<<<<< Updated upstream
    <div className=" w-full h-auto">
      <Link to="/">
        <p className="text-black w-full flex flex-row text-4xl p-3">
          Budget
          <p className="text-prim-main-dark ">Bowl</p>
        </p>
      </Link>
      <hr />
    </div>
=======
    <header className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link to="/">
          <div className="text-4xl font-mono flex items-center cursor-pointer">
            <span className="text-black">Budget</span>
            <span className="text-prim-main-dark">Bowl</span>
          </div>
        </Link>
        <div className="flex gap-4 ml-auto">
          <Link to="/login">
            <button className="text-prim-main-dark px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="border-2 border-prim-main-dark text-prim-main-dark px-6 py-2 rounded-lg font-semibold hover:bg-prim-main-dark hover:text-white transition">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </header>
>>>>>>> Stashed changes
  );
}

export default MainHeader;
