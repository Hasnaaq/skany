"use client";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  return (
    <div className="min-h-screen  grid grid-cols-1 md:grid-cols-2 gap-9 items-center px-4 md:px-12 ">
    
      <div className="hidden md:block">
        <img
          src="/images/ResetPassword/Working.svg"
          alt="Reset Password Illustration"
          className="w-full h-full  object-contain "
        />
      </div>

 
      <div className="flex flex-col  gap-9 justify-center w-full max-w-md mx-auto">

       <div>
         <h2 className="text-3xl font-thin mb-2  text-gray-900 ">Create a new password</h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your new password below to complete the reset process.
        </p>
       </div>

  
      <div>
          {["password", "confirmPassword"].map((field, i) => (
          <div key={i} className="relative mb-4">
            <span className="absolute left-3 top-2.5 text-gray-400">
              <FaLock />
            </span>
            <input
              type={showPassword[field] ? "text" : "password"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field === "password" ? "New password" : "Confirm password"}
              className="w-full rounded-lg bg-gray-100 text-sm py-2 pl-10 pr-10 outline-none text-primary"
            />
            <span
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => togglePasswordVisibility(field)}
            >
              {showPassword[field] ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        ))}

        
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-1 flex-1 rounded bg-green-500"></div>
          ))}
      </div>
        </div>

    <div>

          <ul className="text-xs text-gray-600 mb-6 space-y-1">
          <li className="text-green-600">• upper & lower case Letters</li>
          <li className="text-green-600">• special characters ($%&)</li>
          <li className="text-green-600">• Numbers</li>
        </ul>

        <button className="bg-teal-700 text-white py-2 w-full rounded-full hover:bg-teal-800 transition">
          Reset Password
        </button>
    </div>      
      </div>
    </div>
  );
}
