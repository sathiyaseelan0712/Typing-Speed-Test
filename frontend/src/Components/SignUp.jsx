import React, { useState } from "react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <p className="text-5xl font-bold text-white text-center mb-6 font-anime">
        Your Journey To Typing Mastery Begins Here.
      </p>
      <p className="text-3xl font-bold text-yellow-400 font-anime text-center mb-6">
        SignUp To Measure, Master, & Dominate!
      </p>
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-white font-anime text-center mb-6">
          Join TypeRacer
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-white font-mono text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="email"
              type="email"
              placeholder="example.email@gmail.com"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-400 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
            />
            <svg
              onClick={togglePasswordVisibility}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute right-3 top-9 w-6 h-6 text-gray-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-400 text-sm mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
            />
            <svg
              onClick={toggleConfirmPasswordVisibility}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute right-3 top-9 w-6 h-6 text-gray-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          <button
            className="w-100vw bg-yellow-400 text-back font-anime py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400 text-sm">
          Already to TypeRacer?{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Sign in now
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
