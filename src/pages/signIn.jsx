import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import docnbaby from "../assets/images/docnbaby.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("doctor");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://telemedicine-api-09u5.onrender.com/users/login",
        {
          email,
          password
        }
      );

      // Handle successful login
      console.log("Login successful:", response.data);
      
      // Store the token/user data
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("userRole", response.data.role); // Assuming the response includes user role
      
      // Redirect based on role
      if (response.data.role === "doctor") {
        navigate("/doc/docdash");
      } else if (response.data.role === "patient") {
        navigate("/patient/patdash");
      } else {
        // Default redirect if role is not specified
        navigate("/");
      }
    } catch (err) {
      // Handle errors
      if (err.response) {
        setError(err.response.data.message || "Login failed. Please try again.");
      } else if (err.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
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
      <div className="flex  w-full md:w-1/2 bg-teal-50 justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="LoveHealth Logo" className="h-12 mb-2" />
            <h2 className="text-2xl font-bold">Login to LoveHealth</h2>
            <p className="text-gray-500 text-sm mt-1 text-center">
              Access your personalized healthcare portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
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
                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
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
                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            <div className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-teal-600 hover:underline">
                Create new account
              </a>
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign In
        </h2>
        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        
        <div className="mt-6 flex flex-col space-y-2">
          <div className="text-center text-sm">
            <span className="text-gray-600">Need an account? </span>
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </div>
          <div className="text-center text-sm">
            <span className="text-gray-600">Go to dashboard: </span>
            <Link to="/doc/docdash" className="font-medium text-blue-600 hover:text-blue-500 mr-2">
              Doctor Dashboard
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/pat/patdash" className="font-medium text-blue-600 hover:text-blue-500 ml-2">
              Patient Dashboard
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default LoginPage;
