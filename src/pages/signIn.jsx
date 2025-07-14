import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import docnbaby from "../assets/images/docnbaby.png";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("doctor");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simple validation
    if (!username || !password) {
      alert("Please fill in both fields.");
      setLoading(false);
      return;
    }

    // Simulate loading
    setTimeout(() => {
      if (role === "doctor") {
        navigate("/doc/docdash");
      } else {
        navigate("/patient/patdash");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image Background */}
      <div
        className="hidden lg:flex w-1/2 items-center justify-center p-12 relative"
        style={{
          backgroundImage: `url(${docnbaby})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-md text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to LoveHealth
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 bg-teal-50 justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <Link to="/">
              <img src={logo} alt="LoveHealth Logo" className="h-12 mb-2 cursor-pointer" />
            </Link>
            <h2 className="text-2xl font-bold">Login to LoveHealth</h2>
            <p className="text-gray-500 text-sm mt-1 text-center">
              Access your personalized healthcare portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition disabled:bg-teal-400"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            <div className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-teal-600 hover:underline">
                Create new account
              </Link>
            </div>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;