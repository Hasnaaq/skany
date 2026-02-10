import React from "react";
import { FaCheck } from "react-icons/fa";

export default function SuccessReset() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center text-white text-3xl mb-6">
        <FaCheck />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Your password has been successfully reset!
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Can now log in with your new password
      </p>
      <button className="bg-teal-700 md:w-[20%] w-full text-white py-2 px-6 rounded-md hover:bg-teal-800 transition">
        Login ?
      </button>
    </div>
  );
}
