import React from "react";
import MainHeader from "../components/MainHeader.jsx";
import MainFooter from "../components/MainFooter.jsx";

function HomePage() {
  return (
    <div className="flex flex-col">
      <MainHeader />
      {/* Main Panel */}
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="w-2/3 h-full flex items-center justify-center">
          <div className="w-2/3">
            <h1 className="text-6xl mb-36">
              <span className="text-black font-bold">Share.</span>{" "}
              <span className="text-prim-main-sand font-bold">Eat.</span>{" "}
              <span className="text-prim-main-olive font-bold">Repeat.</span>
              <br />
              Find Quick And Easy Meals While Minimizing Overhead Effort.
            </h1>
          </div>
        </div>
        {/* Picture Side */}
        <div className="w-1/3 h-full bg-prim-main-blue items-start justify-center">
          <img
            className="max-w-[100%] max-h-[100%] p-10 rounded-2xl mt-8"
            src="/demo.png"
            alt="2 meals"
          />
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default HomePage;
