'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import property1 from '@/public/images/Ourlist/image.svg';
import Btn from './Btn'; 
import Titleheader from './Titleheader'; 

const properties = [
  {
    id: 1,
    image: property1,
    price: '$10,999,000',
    monthly: '$1500/month',
    location: 'Banff, National Canada',
  },
  {
    id: 2,
    image:property1 ,
    price: '$10,999,000',
    monthly: '$1500/month',
    location: 'Banff, National Canada',
  },
  {
    id: 3,
    image: property1,
    price: '$10,999,000',
    monthly: '$1500/month',
    location: 'Banff, National Canada',
  },
  {
    id: 4,
    image: property1,
    price: '$10,999,000',
    monthly: '$1500/month',
    location: 'Banff, National Canada',
  },
  {
    id: 5,
    image: property1,
    price: '$10,999,000',
    monthly: '$1500/month',
    location: 'Banff, National Canada',
  },
  {
    id: 6,
    image: property1,
    price: '$10,999,000',
    monthly: '$1500/month',
    location: 'Banff, National Canada',
  },
];

export default function PropertySection() {
  return (
    <section className="bg-[#ECEFEF99] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-start  mb-10">
          <h2 className="text-3xl font-semibold text-gray-950 mb-2">Our List</h2>
          <p className="text-gray-500">Accumsan volutpat occurret id nam, solet numquam accommodare</p>
        </div> */}
          <Titleheader
                  title="Our List"
                  description="Accumsan volutpat occurret id nam, solet numquam accommodare"
                  align="start"
                />

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white p-3 rounded-xl shadow-sm border overflow-hidden">
              <Image
                src={property.image}
                alt="property"
                width={500}
                height={300}
                className="w-full h-56 rounded-xl  object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-green-600 font-medium">For Sale</span>
                  <span className="text-gray-400">{property.monthly}</span>
                </div>

                <p className="text-lg text-gray-600 font-semibold">{property.price}</p>

                <div className="flex items-center justify-between   text-gray-500 text-sm mt-2 mb-4 gap-1">

                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                        <span>{property.location}</span> 
                        </div>
                  
                 
                   <button className="  w-fill py-2 px-7  border border-gray-600  text-gray-600  rounded-lg text-sm font-bold hover:bg-gray-100 transition">
                  Buy
                </button>
                </div>

             
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
        <Btn href="/Ourlist" />
        </div>
      </div>
    </section>
  );
}
