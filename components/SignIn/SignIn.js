"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
       <div className="hidden md:block">
        <img
          src="/logo.svg"  
            alt="building"
            className="object-cover p-7  absolute top-0 left-0 z-40"
            loading="lazy"
        />
         <img
          src="/images/aboutSection/image (4).svg"
          alt="building"
          className=" w-[100%] h-[100vh] object-center object-cover relative"
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-16 bg-white">
        <h2 className="text-3xl font-bold text-primary mb-2">Login</h2>
        <p className="text-sm text-gray-600 mb-6">
          Create your account in just a few steps
        </p>

        <div className="space-y-4 w-full md:w-[80%]">
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500"><FaUser /></span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full rounded-full text-primary py-2 pl-10 pr-10 text-sm focus:border-primary  outline-none bg-gray-100"
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500"><FaLock /></span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-full text-primary py-2 pl-10 pr-10 text-sm focus:border-primary outline-none bg-gray-100"
            />
            <span
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            {/* <label className="flex items-center space-x-1">
              <input type="checkbox" className="" />
              <span>Remember Me</span>
            </label> */}
          <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                className=" border border-gray-500 rounded-sm checked:bg-primary  checked:text-white focus:outline-none focus:ring-0"
              />
              <span>Remember Me</span>
            </label>


            <Link href="/Forgetpassword" className="text-teal-700 font-medium">Forget Password ?</Link>
          </div>


          <button className="w-full bg-teal-800 text-white rounded-full py-2 font-semibold">
            Login
          </button>

     
          <button className="w-full border-2 font-bold rounded-full py-2 flex text-primary items-center justify-center space-x-2">
            <FcGoogle className="text-lg" />
            <span>Continue With Google</span>
          </button>

      
          <p className="text-sm text-center text-gray-600 mt-4">
            Have An Account? <Link href="/SignUp" className="text-teal-700 font-medium">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
