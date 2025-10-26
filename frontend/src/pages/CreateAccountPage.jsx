import React from "react";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateAccountPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    try {
      const response = await axios.post(
        "http://localhost:5001/api/register",
        {
          email,
          password,
          name: `${firstName}, ${lastName}`,
        },
        { withCredentials: true }
      );
      console.log("User created. Server Response:", response.data);
      navigate("/feed");
    } catch (error) {
      alert(`Could not add user ${email}`);
      console.error("Error creating user:", error.response.data);
    }
  };

  return (
    <div className="h-screen bg-prim-main-blue font-mono">
      <MainHeader />
      <div className="w-full h-[90vh] flex items-center justify-center">
        <div className="flex flex-col w-[40%] h-[85%] bg-slate-200 rounded-3xl items-center">
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
            <div className="w-[80%]"></div>
            <h2 className="text-xl pt-2">Create an account to continue.</h2>
            <div className="w-[80%] flex flex-row justify-between">
              <div>
                <div className="flex flex-row justify-start w-[80%]">
                  <label className="mt-3">First Name:</label>
                </div>
                <input
                  id="fn"
                  type="text"
                  placeholder="John..."
                  className="py-3 px-4 w-[90%] border-2 border-prim-grey-p rounded"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <div className="flex flex-row justify-start w-[80%]">
                  <label className="mt-3">Last Name:</label>
                </div>
                <input
                  id="ln"
                  type="text"
                  placeholder="Doe..."
                  className="py-3 px-4 w-[90%] border-2 border-prim-grey-p rounded"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
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
                <Link to="/login">Already have an account?</Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-[80%] bg-prim-main-blue rounded-md py-5 mt-5 flex items-center justify-center hover:opacity-85"
            >
              <h2 className="text-xl text-white">Create an Account!</h2>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
