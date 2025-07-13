import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import docnbaby from "../assets/images/docnbaby.png";

const LoginPage = () => {
  const [role, setRole] = useState("doctor");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    let loginUrl =
      role === "doctor"
        ? "https://telemedicine-api-09u5.onrender.com/doctors/login"
        : "https://telemedicine-api-09u5.onrender.com/patients/login";

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        navigate(role === "doctor" ? "/doc/docdash" : "/patient/patdash");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
