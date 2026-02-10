import React from 'react'
import HeaderPage from '../HeaderPage/HeaderPage'
import Footer from '../Footer/Footer'

export default function AboutUsPage() {
  return (
    <div>
       <HeaderPage
              title="About Us"
              subtitle="Get the features you in all the property we offer with the best price you can get"
              backgroundImage="/images/aboutSection/image (2).svg"
              />
                 <section className="bg-gray-50 py-16 px-6 md:px-20">
                    <div className="max-w-7xl h-full mx-auto grid md:grid-cols-2 items-center gap-32">
                        
                        <div>
                        <span className="text-gray-500 font-medium text-sm">About</span>
                         <hr className="w-7 h-1 bg-[#3D5A5E] border-none rounded" />


                        <h2 className="text-4xl font-semibold mt-2 mb-4 text-gray-900">What About Us ?</h2>
                        <p className="text-gray-600 mb-4">
                            Accumsan volutpat ocurreret id nam, solet numquam accommodare quo et. Et vidit choro aliquip pro,
                            ad inani eirmod vituperata duo. Ut ludus vulputate qui, movartem accom modare eos no, vix error percipitur.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec tellus nulla erisque ultricies massa sagittis dictum malesuada.
                            Urna id velit, quis morbi nibh duis massa odio. Iaculis massa duis sit tellus adipiscing. Cursus amet
                        </p>
                        <p className="text-gray-600 mb-6">
                            Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec tellus nulla erisque ultricies massa sagittis dictum malesuada.
                            Urna id velit, quis morbi nibh duis massa odio. Iaculis massa duis sit tellus adipiscing. Cursus amet
                        </p>
                        {/* <button className="bg-teal-800 text-white px-6 py-2 rounded-md hover:bg-teal-900 transition">
                            Read More
                        </button> */}
                        </div>

                       
                        <div className="w-full h-full flex items-center justify-center   ">
                        <img
                            src="/images/aboutSection/image (4).svg"
                            alt="About us building"
                            className="rounded-lg w-[100%] h-[80%] "
                        />
                        </div>
                    </div>
    </section>

    <Footer />
      
    </div>
  )
}
