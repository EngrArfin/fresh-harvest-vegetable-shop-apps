"use client";

import { useState } from "react";

const SignUp = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleOpenModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseModal = () => {
    setShowSignupModal(false);
  };
  return (
    <div className="relative">
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <button
          onClick={handleOpenModal}
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition"
        >
          Sign Up
        </button>
      </div>

      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition"
              >
                Register
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or Sign Up with</p>
              <div className="flex justify-center space-x-4 mt-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Google
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Facebook
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
