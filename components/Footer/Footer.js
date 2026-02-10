 'use client';


 export default function footer() {
  return (
    <footer className="bg-[#0F1E1D] text-white absolute mt-11 ">
      <div className="bg-[#375958] w-[85%] md:w-[70%] mx-auto relative  bottom-20  px-6 py-8 md:px-16 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">Join Our Free Newsletter</h2>
          <p className="text-sm text-gray-300 mt-1">Turpis euismod pharetra urna ut libero venenatis diam ipsum a orci venenatis.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 w-full md:w-64 rounded bg-[#4A6463] text-white placeholder:text-gray-300 focus:outline-none"
          />
          <button className="bg-black px-4 py-2 font-semibold rounded hover:opacity-90">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      <div className="px-6 py-12 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        <div>
          <div className="mb-4">
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </div>
          <p className="text-gray-400">
            Accumsan volutpat ocurrersolet numquam accom modare quo et. Et vidit choro aliquid pro inani eir mod vituperata duo.
          </p>
        </div>

     
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Career</li>
            <li>Angel Investor</li>
            <li>Terms of Service</li>
            <li>Legal Information</li>
            <li>Credits</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>021 Hollywood Boulevard, Los Angeles</li>
            <li>info@attorni.com</li>
            <li> 021 3456 789</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-[#375958] p-2 rounded-full hover:bg-[#4A6463]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-[#375958] p-2 rounded-full hover:bg-[#4A6463]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-[#375958] p-2 rounded-full hover:bg-[#4A6463]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-[#375958] p-2 rounded-full hover:bg-[#4A6463]">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © 2021 Attorni. All rights reserved.
      </div>
    </footer>
  );
}
