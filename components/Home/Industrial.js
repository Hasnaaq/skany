'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Titleheader from './Titleheader';

import 'swiper/css';
import 'swiper/css/navigation';

const workers = [
  {
    name: 'Saad Ahmed',
    job: 'Plumber',
    rate: '$10/hour',
    country: 'Canada',
    image: '/images/Industrial/imag.svg',
  },
  {
    name: 'Saad Ahmed',
    job: 'Carpenter',
    rate: '$10/hour',
    country: 'Canada',
    image: '/images/Industrial/image (2).svg',
  },
  {
    name: 'Saad Ahmed',
    job: 'Electrician',
    rate: '$10/hour',
    country: 'Canada',
    image: '/images/Industrial/image.svg',
  },
  {
    name: 'Saad Ahmed',
    job: 'Technician',
    rate: '$10/hour',
    country: 'Canada',
    image: '/images/Industrial/image.svg',
  },
];

export default function IndustrialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
      
         <Titleheader
          title="Industrial for your Home"
          description="Accumsan volutpat occurret id nam, solet numquam accommodare"
          align="start"
        />
        <div className="hidden md:flex justify-between absolute left-0 right-0 top-[50%] px-4 z-10">
          <button
            ref={prevRef}
            className="bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

    
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {workers.map((worker, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl w-80  mx-auto shadow border hover:shadow-lg transition">
                
                <div className="relative h-96 w-full cover bg-[#ECEFEF99] "> 
                  <Image
                    src={worker.image}
                    alt={worker.job}
                    fill
                    className="rounded-t-xl   object-contain"
                  />
                </div>

             
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-black ">{worker.name}</h3>
                  <p className="text-gray-500 text-sm">{worker.rate}</p>
                  <p className="text-gray-400 text-sm">{worker.job}</p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500">🇨🇦 {worker.country}</span>
                    <div>
                         <button  href="/Chat" className="bg-[#375958] text-white px-4 py-1 text-sm rounded hover:bg-[#2f4d4c]">
                         Send 💬
                    </button>
                    </div>
                 
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
          <a href="#" className="text-[#375958] font-medium hover:underline">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
