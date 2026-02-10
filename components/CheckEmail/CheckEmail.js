"use client";
import React, { useState } from "react";

export default function CheckEmail() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

 
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-12 py-10">
  
      <div className="hidden md:block">
        <img
          src="/images/CheckEmail/OTP.svg"
          alt="OTP Illustration"
          className="w-full h-full object-contain p-7 "
        />
      </div>

 
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-start mb-8">

        <h2 className="text-3xl font-thin mb-2  text-gray-900 ">Check your email</h2>
        <p className="text-sm text-gray-600 text-start mb-6  max-w-xs">
          We sent a password reset OTP to your email, please check your inbox
        </p>
        </div>

        <div className="flex gap-4 mb-11 w-[60%] justify-center items-center">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              className="w-full h-12 text-center text-lg text-gray-700 border-b-2 bg-transparent  border-gray-400 focus:outline-none focus:border-teal-600"
            />
          ))}
        </div>

     
        {/* <p className="text-xs text-gray-500 mb-6">This code expires in <span className="font-semibold text-gray-800">5:00 minutes</span></p> */}

    
        <div className="flex gap-8 w-full justify-center items-center p-11 ">
          <button className="px-6 py-2  w-full border rounded-lg text-gray-800 hover:bg-gray-100 transition">Cancel</button>
          <button className="px-6   w-full py-2 bg-teal-700  rounded-lg text-white  hover:bg-teal-800 transition">Submit</button>
        </div>
      </div>
    </div>
  );
}
