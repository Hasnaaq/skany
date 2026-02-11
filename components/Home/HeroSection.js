'use client';

import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section

      className="relative h-[90vh] bg-cover bg-center text-white flex items-end justify-center px-4"
     
    >

    
      <div className="absolute inset-0 z-0 " />

      <div className="relative z-10 text-center ">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-thin mb-4">
          Solution to All Your Property Needs
        </h1>
        <p className="text-sm sm:text-base mb-6 mt-14 text-gray-200">
          Get the features you in all the property we offer with the best price you can get
        </p>

    
        <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-9 py-4 w-full max-w-lg mx-auto mb-14">
          <Search className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search your House"
            className="bg-transparent outline-none text-white placeholder-white w-full text-sm"
          />
        </div>

   
        <div className="flex justify-center flex-wrap gap-14 text-white text-sm">

           <div className="flex ">
           <h1 className="text-6xl font-thin  h-10 text-gray-200">
            |
          </h1>
          <div className="text-center">
            <p className="text-3xl text-gray-400 font-thin">25</p>
            <p className="text-gray-400 text-sm  mt-1 text-start">المدن</p>
          </div>
           </div>

          <div className="flex ">
            <h1 className="text-6xl font-thin h-10 text-gray-200">
                |
              </h1>
              <div className="text-center">
                <p className="text-3xl text-gray-400 font-thin">5,835</p>
                <p className="text-gray-400 text-sm mt-1  text-start">العملاء السعداء</p>
              </div>
          </div>
          
          <div className="flex ">
              <h1 className="text-6xl font-thin h-10 text-gray-200">
                  |
                </h1>
                <div className="text-center">
                  <p className="text-3xl text-gray-400 font-thin">15,725</p>
                  <p className="text-gray-400 text-sm mt-1  text-start">المشاريع</p>
                </div>
          </div>
        

        </div>

        <div className="mt-12 flex justify-center">
          <button className="w-8 h-8 border border-white rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-lg">&#8595;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
