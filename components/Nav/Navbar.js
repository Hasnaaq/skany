

'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import logo from "@/public/logo.svg"; 
import Btn from "../Home/Btn"; 
import userImg from "@/public/images/Nav/Ellipse 5925.svg"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header dir="ltr" className=" shadow-sm  top-0 right-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
      
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={80} height={60} />
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-lg text-gray-300">
        <Link href="/" className="hover:text-[#3D5A5E] transition">Home</Link>
        <Link href="/Ourlist" className="hover:text-[#3D5A5E] transition">Our List</Link>
        <Link href="/AboutUs" className="hover:text-[#3D5A5E] transition"> About us </Link>
        <Link href="/ContactUs" className="hover:text-[#3D5A5E] transition">Contact us </Link>
        <Link href="/Faqs" className="hover:text-[#3D5A5E] transition">FAQ</Link>
      </nav>

      <div className=" flex items-center gap-4   ">
        {/* <Heart className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" /> */}
        {/* <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer relative" /> */}
       <div className="hidden md:flex gap-3">
        <Link
              href="/SignUp"
                type="button"
                className="px-5 py-2 text-sm  bg-transparent border-2 rounded-sm border-[#3D5A5E] font-medium "
              >
                Sign up
              </Link>
              <Btn
                label="Sign In"
                href="SignIn"

              /> 

       </div>

       
         
        {/* <Image
        src={userImg}
        alt="User"
        width={32}
        height={32}
        className="rounded-full object-cover border border-gray-300"
        /> */}

        <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-gray-500 hover:text-blue-600"
        >
        <Menu className="w-6 h-6" />
        </button>
      </div>
      </div>

      {isOpen && (
      <>
        <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={() => setIsOpen(false)}
        />
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 p-6 shadow-md transition-transform">
        <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-[#3D5A5E] uppercase">mune</span>
          <button onClick={() => setIsOpen(false)}>
          <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-center  text-gray-700">
         <Link href="/" className="hover:text-[#3D5A5E]  transition">Home</Link>
        <Link href="/Ourlist" className="hover:text-[#3D5A5E]  transition">Our List</Link>
        <Link href="/AboutUs" className="hover:text-[#3D5A5E]  transition"> About us </Link>
        <Link href="/ContactUs" className="hover:text-[#3D5A5E]   transition">Contact us </Link>
        <Link href="/Faqs" className="hover:text-[#3D5A5E]  transition">FAQ</Link>
        </nav>
      <div className="mt-6 flex flex-col gap-3 ">
   <button 
              href="/SignUp"
                type="button"
                className="px-5 py-2 text-lg text-[#3D5A5E]  bg-transparent border-2 rounded-sm border-[#3D5A5E] font-medium "
              >
                Sign up
              </button>
              {/* <Btn
                label="Sign In"
                href="/SignIn"
              />  */}
               <button 
              href="/SignIn"
                type="button"
                className="px-5 py-2 text-lg bg-[#3D5A5E]   text-white border-2 rounded-sm border-[#3D5A5E] font-medium "
              >
                Sign up
              </button>
      </div>

      
        </div>
      </>
      )}
    </header>
    );
}


