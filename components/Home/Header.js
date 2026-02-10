import React from 'react'
import Navbar from '../Nav/Navbar'
import HeroSection from './HeroSection'


export default function header() {
return (
 <div className="min-h-screen bg-cover   bg-center" style={{ backgroundImage: "url('/images/Header/image.svg')" }}>
  <Navbar />
  <HeroSection />
</div>

)
}
