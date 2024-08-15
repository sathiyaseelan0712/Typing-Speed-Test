import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect to the home page
        window.location.href = "/home";
      } else {
        // Handle login failure
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <p className="text-4xl font-bold text-white text-center mb-6 font-mono">
        Your journey to typing mastery begins here.
      </p>
      <p className="text-2xl font-bold text-yellow-400 text-center mb-6 font-mono">
        Login to Measure, Master, and Dominate!
      </p>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm bg-transparent">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-mono">
          SignIn
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              className="block text-white font-mono font-extrabold text-lg mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              id="email"
              type="email"
              placeholder="example.email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ border: "3px solid white" }}
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-white font-mono font-extrabold text-lg mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ border: "3px solid white" }}
            />
            <svg
              onClick={togglePasswordVisibility}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute right-3 top-9 w-6 h-10 cursor-pointer ${
                showPassword ? "text-yellow-500" : "text-white"
              }`}
            >
              {showPassword ? (
                // Eye open icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM2.458 12C3.732 7.943 7.284 5 12 5c4.716 0 8.268 2.943 9.542 7-1.274 4.057-4.826 7-9.542 7-4.716 0-8.268-2.943-9.542-7z"
                />
              ) : (
                // Eye closed icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              )}
            </svg>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center text-white text-md">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-white rounded"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-yellow-400 hover:underline text-md">
              Forgot password?
            </a>
          </div>
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <button
            className="w-100vw bg-white text-black font-mono py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            type="submit"
          >
            SignIn
          </button>
        </form>
        <p className="mt-6 text-center text-white font-mono text-md">
          NewToTypeRacer?{" "}
          <a href="/signup" className="text-yellow-400 font-mono hover:underline">
            SignUpNow
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
