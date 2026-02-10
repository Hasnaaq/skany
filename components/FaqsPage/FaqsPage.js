"use client";
import React from 'react'
import HeaderPage from '../HeaderPage/HeaderPage'
import Footer from '../Footer/Footer'
import { useState } from "react";


export default function FaqsPage() {

const faqs = [
  {
    question: "How this work?",
    answer:
      "Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
  },
  {
    question: "Are there any additional fee?",
    answer: "No, all fees are included in your initial purchase.",
  },
  {
    question: "How can I get the website",
    answer: "Once your order is confirmed, we'll send you a download link.",
  },
  {
    question: "What features do you offer and other not?",
    answer: "We offer hosting, SEO, and custom design — but not domain registration.",
  },
];


const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
        <HeaderPage
        title="FAQs"
        subtitle="Get the features you in all the property we offer with the best price you can get"
        backgroundImage="/images/Faqs/image (2).svg"
        />
       
        <section className="py-24  flex items-center justify-center mb-40 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
            <div>
            <h2 className="text-4xl font-thin mb-4 text-gray-800">
                Any questions? <br /> we get you.
            </h2>
            <p className="text-gray-600 md:pr-16  mb-6">
              Accumsan volutpat ocurreret id nam, solet numquam accommodare quo et. Et vidit choro aliquid pro, ad inani eirmod vituperata duo. Ut ludus vulputate qui, movartem accom modare eos no, vix error percipitur.Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec tellus nulla erisque ultricies massa sagittis dictum malesuada. Urna id velit, quis morbi nibh duis massa odio. Iaculis massa duis sit tellus adipiscing. Cursus amet
            </p>
            {/* <a href="#" className="text-teal-600 font-medium hover:underline">
                More FAQs?
            </a> */}
            </div>

        
            <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                >
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <span className="text-2xl text-gray-500">
                    {openIndex === index ? "−" : "+"}
                    </span>
                </div>
                {openIndex === index && (
                    <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
                )}
                </div>
            ))}
            </div>
        </div>
        </section>
 

    <Footer/>
    </div>
   
   
  )
}
