import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import medwellLogo from "./medwell_logo.png";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDoctor, setIsDoctor] = useState(false);
  const navigate = useNavigate();

  const background = isDoctor ? "bg-[#c5d8fc]" : "bg-gray-200";
  const cardBackground = isDoctor ? "bg-[#3a82f7] text-white" : "bg-white text-black";
  const buttonColor = isDoctor ? "bg-white text-[#3a82f7]" : "bg-[#3a82f7] text-white";
  const navbarBackground = isDoctor ? "bg-[#3a82f7]" : "bg-white";
  const toggleColor = isDoctor ? "text-white" : "text-[#3a82f7]";
  const sloganColor = isDoctor ? "text-white" : "text-[#3a82f7]";

  const typingEffectStyle = {
    display: "inline-block",
    fontSize: "1.5rem",
    fontFamily: "'Roboto', sans-serif",
    opacity: 0,
    animation: "fadeIn 1.5s ease-in-out forwards",
  };

  return (
    <div className={`min-h-screen flex flex-col items-center ${background} bg-opacity-30 backdrop-blur-md transition-all duration-700`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <nav className={`w-full fixed top-0 flex justify-between items-center py-3 px-8 shadow-md ${navbarBackground} transition-all z-10`}>
        <img
          src={medwellLogo}
          alt="MedWell Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex space-x-6 text-black">
          <a className="hover:text-blue-600 cursor-pointer" onClick={() => navigate('/')}>Home</a>
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">About</a>
          <span onClick={() => setIsDoctor(!isDoctor)} className={`cursor-pointer hover:underline font-semibold ${toggleColor}`}>
            {isDoctor ? "I am a Patient" : "I am a Doctor"}
          </span>
        </div>
      </nav>

      <div className={`mt-40 flex items-center justify-center w-full max-w-4xl p-8 rounded-lg shadow-md transition-all ${cardBackground}`}>
        <div className="flex w-full transition-all">
          {isLogin && (
            <div className="hidden md:flex w-1/2 p-8 rounded-l-lg items-center">
              <p className={`text-2xl font-semibold leading-snug ${sloganColor}`} style={typingEffectStyle}>
                We at MedWell prioritize helping you understand your healthcare needs.
              </p>
            </div>
          )}

          <div className={`w-full ${isLogin ? "md:w-1/2" : "w-full"} p-8`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{isLogin ? "Login" : "Sign Up"}</h2>
              <button onClick={() => setIsLogin(!isLogin)} className="px-4 py-1 text-sm font-medium border-b-2 border-transparent focus:outline-none transition-colors">
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </div>

            {isLogin ? (
              <form className="space-y-4">
                <div>
                  <label className="block">E-Mail</label>
                  <input type="text" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block">Password</label>
                  <input type="password" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter OTP" />
                  <button type="button" className={`px-4 py-2 rounded-md ${buttonColor}`}>Verify</button>
                </div>
                <button type="submit" className={`w-full px-4 py-2 font-semibold rounded-md ${buttonColor}`}>Login</button>
              </form>
            ) : (
              <form className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block">First Name</label>
                  <input type="text" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="First name" />
                </div>
                <div>
                  <label className="block">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Last name" />
                </div>
                <div className="col-span-1">
                  <label className="block">Phone Number</label>
                  <input type="text" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Phone number" />
                </div>
                <div className="col-span-1">
                  <label className="block">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email address" />
                </div>
                <div>
                  <label className="block">Password</label>
                  <input type="password" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Password" />
                </div>
                <div>
                  <label className="block">Confirm Password</label>
                  <input type="password" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Confirm password" />
                </div>
                <div className="col-span-2">
                  <button type="submit" className={`w-full px-4 py-2 font-semibold rounded-md ${buttonColor}`}>Sign Up</button>
                </div>
                <div className="col-span-2 text-center mt-2 text-sm text-gray-600">
                  By signing up, you agree to our <a href="#" className="text-blue-500 underline">terms and conditions</a>.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
