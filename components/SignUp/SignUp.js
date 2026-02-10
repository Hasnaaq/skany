"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaIdBadge, FaPhone, FaLock ,FaEye, FaEyeSlash  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    id: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
    type: "Industrial",
  });


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
  
      <div className="hidden md:block">
        <img
          src="/logo.svg"  
            alt="building"
            className="object-cover p-7  absolute top-0 left-0 z-40"
            loading="lazy"
        />
         <img
          src="/images/SignUp/image 1.svg"
          alt="building"
          className=" w-[100%] h-[100vh] object-center object-cover relative"
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Signup</h2>
        <p className="text-sm text-gray-600 mb-6">
          Create your account in just a few steps
        </p>

        <div className="space-y-4 w-[100%] md:w-[80%]">
          {[
            { icon: <FaUser />, placeholder: "Enter your Name", name: "name" },
            { icon: <FaEnvelope />, placeholder: "Enter your E-mail", name: "email" },
            { icon: <FaIdBadge />, placeholder: "Enter ID", name: "id" },
            { icon: <FaPhone />, placeholder: "Enter your Phone Number", name: "phone" },
            // { icon: <FaLock />, placeholder: "Enter your password", name: "password", type: "password" },
            // { icon: <FaLock />, placeholder: "Confirm password", name: "confirmPassword", type: "password"  },
          ].map(({ icon, placeholder, name, type = "text" }, i) => (
            <div key={i} className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">{icon}</span>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full  rounded-full text-primary py-2 pl-10 pr-3 text-sm focus:border-primary outline-none bg-gray-100"
              />
            </div>
          ))}



        
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500"><FaLock /></span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-full text-primary py-2 pl-10 pr-10 text-sm focus:border-primary outline-none bg-gray-100    [appearance:textfield] [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
            />
            <span
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500"><FaLock /></span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full rounded-full text-primary py-2 pl-10 pr-10 text-sm focus:border-primary outline-none bg-gray-100   [appearance:textfield] [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
            />
            <span
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div>
          
            <label className="block text-sm text-primary font-medium mb-1">Select Role *</label>
            <div className="flex items-center space-x-4">
            {["Buyer", "Broker"].map((role) => (
                <label key={role} className="flex items-center space-x-1 cursor-pointer">
                <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={formData.role === role}
                    onChange={handleChange}
                    className="accent-primary "
                />
                <span className="text-primary font-medium">{role}</span>
            </label>
              ))}

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="ml-auto text-primary font-medium border border-primary rounded px-2 py-1 text-sm bg-transparent"
              >
                <option >Industrial</option>
                <option>Commercial</option>
                <option>Residential</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-teal-800 text-white rounded-full py-2 font-semibold hover:bg-teal-700 transition-colors">
            Sign up
          </button>

          <button className="w-full  border-[2px] text-primary font-bold text-sm rounded-full py-2 flex items-center justify-center space-x-2">
            <FcGoogle className="text-xl  " />
            <span>Continue With Google</span>
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Have An Account? <Link href="/SignIn" className="text-teal-700 font-medium">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
