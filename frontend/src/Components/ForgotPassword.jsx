import React from 'react'

function ForgotPassword() {
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
        Forgot Password
      </h2>
      <form >
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
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{ border: "3px solid white" }}
          />
        </div>
        <button
          className="w-100vw bg-white text-black font-mono py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
          type="sendOTP"
        >
          SentOTP
        </button>
      </form>
    </div>
  </div>
  )
}

export default ForgotPassword