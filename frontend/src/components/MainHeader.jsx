import { React, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function MainHeader() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link to="/">
          <div className="text-4xl font-mono flex items-center cursor-pointer">
            <span className="text-black">Budget</span>
            <span className="text-prim-main-dark">Bowl</span>
          </div>
        </Link>
        {!loggedIn ? (
          <div className="flex gap-4 ml-auto">
            <Link to="/login">
              <button className="text-prim-main-dark px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Log In
              </button>
            </Link>

            <Link to="/register">
              <button className="border-2 border-prim-main-dark text-prim-main-dark px-6 py-2 rounded-lg font-semibold hover:bg-prim-main-dark hover:text-white transition">
                Create Account
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-4 ml-auto">
            <button
              onClick={handleLogout}
              className="border-2 border-prim-main-dark text-prim-main-dark px-6 py-2 rounded-lg font-semibold hover:bg-prim-main-dark hover:text-white transition"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default MainHeader;
