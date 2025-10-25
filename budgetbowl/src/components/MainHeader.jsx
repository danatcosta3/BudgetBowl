import React from "react";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <div className=" w-full h-auto">
      <Link to="/">
        <p className="text-black w-full flex flex-row text-4xl p-3">
          Budget
          <p className="text-prim-main-dark ">Bowl</p>
        </p>
      </Link>
      <hr />
    </div>
  );
}

export default MainHeader;
