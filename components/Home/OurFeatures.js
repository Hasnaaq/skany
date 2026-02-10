'use client';

import { useRef } from "react";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import feature1 from "@/public/images/Ourfeatures/image.svg";
import feature2 from "@/public/images/Ourfeatures/image (2).svg";
import Btn from "./Btn";

import "swiper/css";
import "swiper/css/navigation";
import Titleheader from "./Titleheader";

const features = [
  {
    id: 1,
    title: "Sky scrapers",
    image: feature1,
    price: "$10,999,000",
    monthly: "$1500/month",
    location: "Banff National Park, Canada",
  },
  {
    id: 2,
    title: "Rouse village",
    image: feature1,
    price: "$10,999,000",
    monthly: "$1500/month",
    location: "Banff National Park, Canada",
  },
  {
    id: 3,
    title: "Wooden houses",
    image: feature2,
    price: "$10,999,000",
    monthly: "$1500/month",
    location: "Banff National Park, Canada",
  },
  {
    id: 4,
    title: "Glass Palace",
    image: feature2,
    price: "$10,999,000",
    monthly: "$1500/month",
    location: "Banff National Park, Canada",
  },
];

export default function FeaturesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
      
        <Titleheader
          title="Our Features"
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
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false, 
          }}
          loop={true} 
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Autoplay, Navigation]}
        >
          {features.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="overflow-hidden w-96  shadow border">
                <div className="relative h-96">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white px-4 py-3 text-lg font-semibold">
                    {item.title}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>For sale</span>
                    <span>{item.monthly}</span>
                  </div>

                  <p className="text-xl font-bold text-gray-800">{item.price}</p>

                  <div className="flex items-center text-gray-500 text-sm mt-2 gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
        <Btn/>
        </div>
      </div>
    </section>
  );
}
