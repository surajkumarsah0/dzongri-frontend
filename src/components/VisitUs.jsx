
import React from 'react';
import { MoveRight } from 'lucide-react';
const VisitUs = () => {
  return (
    <section className="bg-[#fdf9f5] py-20">
      <div className="max-w-full mx-auto px-12 text-center ">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wide mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          VISIT US
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-amber-400 rounded"></div>
        </div>

        {/* Address & Info */}
        <div className="md:flex md:items-center md:justify-between bg-transparent px-10 w-full md:px-20">
          <div className="md:w-1/2 mb-6 md:mb-0 text-left ">
            <h3 className="text-2xl font-bold text-[#5b2b2b] mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
              OUR LOCATION
            </h3>
            <p className="text-[#5b2b2b]/90 mb-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              123 Delicious Street, Culinary City, Country
            </p>
            <p className="text-[#5b2b2b]/90 mb-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>Phone: +123 456 7890</p>
            <p className="text-[#5b2b2b]/90 mb-4" style={{ fontFamily: '"Montserrat", sans-serif' }}>Email: contact@restaurant.com</p>
                <div className="mt-8 text-center flex">
              <button type="button" src="https://www.google.com/maps/dir//DZONGRI+cuisine,+Thimphu,+Bhutan/@26.6615663,87.6954331,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39e591006def1863:0xe88077c2b3c04aa3!2m2!1d87.6976221!2d26.6615663"
                    className="px-11 py-2 mt-4  rounded-full font-medium text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                    style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    backgroundColor: '#f6ad55',
                    color: 'white'
                    }}
               
              >
                <span className="relative z-10 flex items-center gap-2">Get Directions <MoveRight /> </span>
              </button>
          </div>
          </div>

          {/* Map */}
          <div className="md:w-1/2 h-80 md:h-80  shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.74159041910255!2d87.69762270890368!3d26.661566259249536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e591006def1863%3A0xe88077c2b3c04aa3!2sDZONGRI%20cuisine!5e1!3m2!1sen!2snp!4v1751652243621!5m2!1sen!2snp"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;

