"use client";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2    items-center px-4 md:px-12 py-10   ">
      
      <div className="hidden md:block">
        <img
        src="/images/Forgetpassword/Forgotpassword.svg"
          alt="Forget Password Illustration"
          className="w-full h-full object-contain p-5"
        />
      </div>

      <div className="flex flex-col  justify-between p-7 w-[100%]   gap-8 items-start md:justify-center space-y-6">
        <div className="flex gap-7 flex-col">
             <div>
          <h2 className="text-3xl font-thin text-gray-900 mb-2">Forget password</h2>
          <p className="text-sm text-gray-600 max-w-xs">
            Don’t worry! Enter your email address below, and we will send you an OTP in your email.
          </p>
        </div>

        <div className="relative w-[100%] ">
          <span className="absolute left-3 top-3 text-gray-500">
            <FaEnvelope />
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your E-mail"
            className="w-full pl-10 pr-3 py-3 rounded-lg text-gray-800 bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        </div>
     
        <div className="flex gap-4  md:justify-around md:w-[80%] w-full flex-col md:flex-row justify-center ">
          <button className="px-6 md:w-[80%] w-full py-2 border border-gray-500 rounded-lg text-gray-800 hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="px-6 py-2 md:w-[80%] w-full bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
