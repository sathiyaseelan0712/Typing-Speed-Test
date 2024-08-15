import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      // Example: Fetching the user's IP address before signing up
      const {
        data: { ip },
      } = await axios.get("https://api.ipify.org?format=json");

      console.log("User IP Address:", ip);

      // Post the signup data to the server
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          email,
          password,
          confirmPassword,
        }
      );

      // Handle successful sign-up (e.g., redirect to login or home page)
      console.log(response.data);
      setErrorMessage("");
      alert("Sign-up successful!");
      navigate('/signin');
    } catch (error) {
      if (error.response) {
        console.error("Response error data:", error.response.data);
        console.error("Response error status:", error.response.status);
        setErrorMessage(error.response.data.message || "Sign-up failed. Please try again.");
      } else if (error.request) {
        console.error("No response received:", error.request);
        setErrorMessage("No response received from server. Please check your network connection.");
      } else {
        console.error("Error setting up request:", error.message);
        setErrorMessage("An error occurred while setting up the request. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <p className="text-4xl font-extrabold text-white text-center mb-6 font-mono">
        Your Journey To Typing Mastery Begins Here.
      </p>
      <p className="text-2xl font-extrabold text-yellow-400 font-mono text-center mb-6">
        Sign Up To Measure, Master, & Dominate!
      </p>
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white font-mono text-center mb-6">
          Join TypeRacer
        </h2>
        <form onSubmit={handleSignUp}>
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
              style={{ border: "3px solid white" }}
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-white text-lg font-mono font-extrabold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                isPasswordVisible ? "text-yellow-500" : "text-white"
              }`}
            >
              {isPasswordVisible ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM2.458 12C3.732 7.943 7.284 5 12 5c4.716 0 8.268 2.943 9.542 7-1.274 4.057-4.826 7-9.542 7-4.716 0-8.268-2.943-9.542-7z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              )}
            </svg>
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-white font-mono font-extrabold text-lg mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-2 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              id="confirmPassword"
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ border: "3px solid white" }}
            />
            <svg
              onClick={toggleConfirmPasswordVisibility}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute right-3 top-9 w-6 h-10 cursor-pointer ${
                isConfirmPasswordVisible ? "text-yellow-500" : "text-white"
              }`}
            >
              {isConfirmPasswordVisible ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM2.458 12C3.732 7.943 7.284 5 12 5c4.716 0 8.268 2.943 9.542 7-1.274 4.057-4.826 7-9.542 7-4.716 0-8.268-2.943-9.542-7z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              )}
            </svg>
          </div>
          {errorMessage && (
            <p className="text-red-500 font-mono font-extrabold mb-4">
              {errorMessage}
            </p>
          )}
          <button
            className="w-100 bg-white text-black font-mono py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            type="submit"
          >
            SignUp
          </button>
        </form>
        <p className="mt-6 text-center text-white text-md">
          AlreadyoOnTypeRacer?{" "}
          <a
            href="/signin"
            className="text-yellow-400 font-mono hover:underline"
          >
            SignInNow
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
