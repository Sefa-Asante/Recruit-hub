import React, { useState } from 'react'

const Login = () => {

    const [isLoginMode, setIsLoginMode]=useState(true)
 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-300 p-4">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        {isLoginMode ? "Login" : "Sign Up"}
      </h2>

      {/* Toggle Buttons */}
      <div className="relative flex h-12 mb-8 border border-gray-300 rounded-full overflow-hidden">
        <button
          onClick={() => setIsLoginMode(true)}
          className={`w-1/2 text-lg font-semibold z-10 transition-colors ${
            isLoginMode ? "text-white" : "text-gray-600"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={`w-1/2 text-lg font-semibold z-10 transition-colors ${
            !isLoginMode ? "text-white" : "text-gray-600"
          }`}
        >
          Sign Up
        </button>
        <div
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
            isLoginMode ? "translate-x-0" : "translate-x-full"
          }`}
        />
      </div>

      {/* Form */}
      <form className="space-y-5">
        {!isLoginMode && (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}
        {isLoginMode && (
          <div className="text-right text-sm text-blue-600">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition duration-300"
        >
          {isLoginMode ? "Login" : "Sign Up"}
        </button>

        {/* Toggle Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <a href="#" onClick={(e) => { e.preventDefault(); setIsLoginMode(!isLoginMode); }} className="text-blue-600 font-medium hover:underline">
            {isLoginMode ? "Sign up now" : "Log in"}
          </a>
        </p>
      </form>
    </div>
  </div>
)

  
}

export default Login