import { React, useState, useEffect } from "react";
import MainHeader from "../components/MainHeader.jsx";
import MainFooter from "../components/MainFooter.jsx";
import { useLocation } from "react-router-dom";

function HomePage() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const location = useLocation();

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
  }, [location.pathname]);

  return (
    <div className="flex flex-col">
      <MainHeader />
      {/* Main Panel */}
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="max-w-[55%] h-full flex items-center justify-center">
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
        <div className="w-[55%] h-full bg-prim-main-blue flex items-center justify-center pb-36 shadow-xl">
          <img
            className="max-w-[95%] max-h-[100%] rounded-2xl ring-8 ring-prim-main-squirt"
            src="/demo.png"
            alt="2 meals"
          />
        </div>
      </div>
      {loggedIn ? <MainFooter /> : <div></div>}
    </div>
  );
}

export default HomePage;
