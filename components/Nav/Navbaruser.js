

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
    <header dir="ltr" className="  shadow-sm  top-0 right-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
      
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={80} height={60} />
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-lg text-gray-800">
        <Link href="/" className="hover:text-[#3D5A5E] transition">Home</Link>
        <Link href="#" className="hover:text-[#3D5A5E] transition">Our List</Link>
        <Link href="#" className="hover:text-[#3D5A5E] transition"> About us </Link>
        <Link href="#" className="hover:text-[#3D5A5E] transition">Contact us </Link>
        <Link href="/Faqs" className="hover:text-[#3D5A5E] transition">FAQ</Link>
      </nav>

      <div className="flex items-center gap-4">
        {/* <Heart className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" /> */}
        {/* <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer relative" /> */}
        {/* <button
          type="button"
          className="px-5 py-2 text-sm  bg-transparent border-2 rounded-sm border-[#3D5A5E] font-medium "
        >
          Sign up
        </button>
        <Btn
          label="Sign In"
        />   */}
         
        <Image
        src={userImg}
        alt="User"
        width={32}
        height={32}
        className="rounded-full object-cover border border-gray-300"
        />

     
      </div>
    </div>
     
    </header>
    );
}


