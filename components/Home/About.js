


'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">

      {/* ===== Section 1 ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">

        {/* Text */}
        <div className="space-y-4">
          <p className="text-sm text-gray-400 uppercase">About</p>
          <hr className="w-7 h-1 bg-[#3D5A5E] border-none rounded" />

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            About Us
          </h2>

          <p className="text-gray-500">
            Accumsan volutpat ocurreret id nam, solet numquam accommodare quo et.
            Et elit choro aliquip pro ad, no ferri inimid vulputate duo.
          </p>

          <p className="text-gray-500 ">
            Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec tellus
            nulla integer ultricies massa sit sagittis dictum malesuada.
          </p>
          <div>
            <Link href="/AboutUs" className="bg-[#375958] text-white px-5 py-2 rounded hover:bg-[#2f4d4c] transition">
            Read More
            </Link>
          </div>

          
        </div>

        {/* Image Right */}
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[520px]   ">
          <Image
            src="/images/aboutSection/image (4).svg"
            alt="Building"
            fill
            className="object-contain rounded-lg "
          />
        </div>
      </div>


      {/* ===== Section 2 ===== */}
      {/* <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px]">
          <Image
            src="/images/aboutSection/Group 5.svg"
            alt="Video Thumbnail"
            fill
            className="object-cover rounded-xl"
          />
        </div>

      
        <div className="space-y-4">
          <p className="text-sm text-gray-400 uppercase">Work</p>
          <hr className="w-7 h-1 bg-[#3D5A5E] border-none rounded" />

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            We Work Very <br /> Professionally
          </h2>

          <p className="text-gray-500">
            Accumsan volutpat ocurreret id nam, solet numquam accommodare quo et.
            Et elit choro aliquip pro ad, no ferri inimid vulputate duo.
          </p>
        </div>
      </div> */}
    </section>
  );
}
