import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
function MainHeader() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/auth/check", { withCredentials: true })
      .then((res) => setLoggedIn(res.data.loggedIn))
      .catch(() => setLoggedIn(false));
  }, [location.pathname]);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:5001/api/auth/logout",
      {},
      { withCredentials: true }
    );
    setLoggedIn(false);
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
