

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 mb-16 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center  gap-12">
      
        <div className="md:w-1/2 flex flex-col text-center md:text-left">
          <h2 className="text-4xl font-thin mb-4 text-gray-900">Contact us</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly.
          </p>
        <div className=" hidden md:flex md:justify-end md:items-end">
              <img
                src="/images/ContactUs/Vector.svg"  
                alt="Contact Us"
                className="mt-6 w-52  "
            />
        </div>
        </div>

        <form className="md:w-1/2 w-full bg-white p-6 rounded-lg space-y-4 shadow-sm">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2"
          ></textarea>
          <button
            type="submit"
            className="bg-primary w-full md:w-fit text-white px-6 py-2 rounded-md  transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
