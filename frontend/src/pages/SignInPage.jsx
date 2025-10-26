import React from "react";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignInPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    try {
      //TODO
    } catch (error) {
      alert(`Could not add user ${email}`);
      console.error("Error logging in user:", error.response.data);
    }
  };

  return (
    <div className="h-screen bg-prim-main-blue font-mono">
      <MainHeader />
      <div className="w-full h-[90vh] flex items-center justify-center">
        <div className="flex flex-col w-[40%] h-[75%] bg-slate-200 rounded-3xl items-center">
          <h2 className="text-6xl text-black pt-10">
            Budget<span className="text-prim-main-dark">Bowl</span>
          </h2>
          <h4 className="text-xl pt-1 text-prim-main-squirt">
            Affordable meals for college students
          </h4>
          <form
            className="w-[100%] flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl pt-14">
              Login to your account to continue.
            </h2>
            <div className="flex flex-row justify-start w-[80%]">
              <label htmlFor="email" className="mt-3">
                Email:
              </label>
            </div>
            <input
              id="email"
              type="email"
              placeholder="Enter your email..."
              className="py-3 px-4 w-[80%] border-2 border-prim-grey-p rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex flex-row justify-start w-[80%] mt-5">
              <label htmlFor="password" className="">
                Password:
              </label>
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              className="py-3 px-4 w-[80%] border-2 border-prim-grey-p rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-[80%] flex mt-5 justify-between">
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="togglePass"
                  id="togglePass"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
                <p className="ml-2">Show Password</p>
              </div>
              <p className="text-prim-main-squirt underline hover:bg-opacity-85">
                <Link to="/register">Don't have an account?</Link>
              </p>
            </div>
            <div className="w-[80%] bg-prim-main-blue rounded-md py-5 mt-5 flex items-center justify-center hover:opacity-85">
              <Link to="/feed">
                <h2 className="text-xl text-white">Log In!</h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
