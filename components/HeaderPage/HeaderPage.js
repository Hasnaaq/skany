import React from 'react'
import Navbar from '../Nav/Navbar'

export default function HeaderPage({ title, subtitle, backgroundImage }) {
    return (
        <div
            className="h-[50vh] bg-cover bg-center"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '60vh',
            }}
        >
            <Navbar />
            <div className="flex flex-col h-full text-gray-300 md:py-24 md:px-24 py-16 pl-2">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8 text-gray-400 w-96">{subtitle}</p>
            </div>
        </div>
    );
}
