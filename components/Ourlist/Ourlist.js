"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Titleheader from "../Home/Titleheader";
import HeaderPage from "../HeaderPage/HeaderPage";

const properties = new Array(9).fill({
  title: "Banff National Canada",
  price: "$10,999,000",
  status: "For Sale",
  image: "/images/Ourlist/image.svg",
  rent: "$1500 / month",
});

export default function Ourlist() {
  const [activePage, setActivePage] = useState(2);
  const [sortBy, setSortBy] = useState("Recent");
  const [filter, setFilter] = useState("All");
  const [priceRange, setPriceRange] = useState(5);

  return (

    <div>

    
    
       
        <HeaderPage
        title="Our List"
        subtitle="Accumsan volutpat occurret id nam, solet numquam accommodare"
        backgroundImage="/images/Ourlist/image (5).svg"
        />


          <div className="min-h-screen bg-white p-4 md:p-10">
      <div className="grid md:grid-cols-5 gap-6 ">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-6 border-r pr-7  ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border rounded-full px-4 py-2 bg-transparent text-sm"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500 text-sm" />
          </div>

          <div className="text-gray-900">
            <h3 className="text-lg font-medium mb-2">Filter</h3>
            {['All', 'For Sale', 'Sold'].map(option => (
              <label key={option} className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="filter"
                  value={option}
                  checked={filter === option}
                  onChange={() => setFilter(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <div className="text-gray-900">
            <h3 className="text-lg text-gray-900 font-medium mb-2">Alphabetical</h3>
            <div className="space-y-2 flex gap-2 flex-col">
              <button className="w-fit border rounded-full py-2 px-3 text-sm hover:bg-gray-100">
                From A-Z
              </button>
              <button className="w-fit border rounded-full py-2 px-3 text-sm hover:bg-gray-100">
                From Z-A
              </button>
            </div>
          </div>

          <div className="text-gray-900">
            <h3 className="text-lg  font-medium mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="10"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>0 AED</span>
              <span>10,000,000</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-4 text-gray-900">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Our List Real Estate</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Sort by:</span>
              <select
                className="border rounded-md bg-transparent text-gray-900 text-sm px-2 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Recent</option>
                <option>Price</option>
                <option>Alphabet</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((item, i) => (
              <div key={i} className="border rounded-xl w-72 h-50 overflow-hidden shadow-sm">
                <img src={item.image} alt="property" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.status === "Sold"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs text-gray-400">{item.rent}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.price}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <i className="fas fa-map-marker-alt" /> {item.title}
                  </p>
                  <button
                    className={`mt-3 w-full rounded-md py-1 text-sm font-medium transition ${
                      item.status === "Sold"
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-teal-800 text-white hover:bg-teal-900"
                    }`}
                  >
                    {item.status === "Sold" ? "Buy" : "Buy"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8 text-sm">
            <button className="px-3 py-1 border rounded">Previous</button>
            {[1, 2, 3, 4, 5, "...", 10].map((page, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded ${
                  page === activePage
                    ? "bg-teal-700 text-white"
                    : "border text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>

    </div>
 
  );
}
