import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

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
  );
}

export default LogIn;