import React, { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Replace this with your real sign-in logic (API call, Firebase, etc.)
    console.log("Signing in with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50 px-4">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-teal-700 text-center mb-6">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
          Password
        </label>
        <input
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <div className="mt-4">
          <button
            className=" px-4 py-2 bg-teal-600 text-white rounded"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
