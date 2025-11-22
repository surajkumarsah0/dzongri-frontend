import React from "react";
import { motion } from "framer-motion";

const WeOfferYou = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-[#5b2b2b] tracking-wider mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              WE OFFER YOU
            </h3>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-amber-400 rounded"></div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
            <motion.div className="order-2 md:order-1 flex justify-center md:justify-end" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="w-full h-72 sm:h-80 md:w-[46rem] md:h-96 rounded-2xl shadow-2xl overflow-hidden relative bg-white hover:shadow-black-300/50 hover:scale-105 transition-transform duration-500">
                <img src="https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8651.JPG" alt="Dining" className="w-full h-full object-cover block hover:scale-102 transition-transform duration-500" />
              </div>
            </motion.div>

            <motion.div className="order-1 md:order-2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl sm:text-4xl md:text-2xl font-extrabold tracking-wider text-[#5b2b2b] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                AN UNFORGETTABLE DINING EXPERIENCE
              </h2>
              <div className="w-20 h-1 bg-amber-400 rounded mb-4 sm:mb-6"></div>
              <p className="text-[#5b2b2b] leading-relaxed text-base sm:text-lg max-w-prose" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                Indulge in culinary excellence with our chef's signature creations, crafted from the finest ingredients and served in an ambiance of sophistication.
                

                Whether it's a romantic dinner, a family gathering, or a business meeting, we promise an unforgettable dining experience that delights all your senses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="bg-[#fdf9f5] py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
            <motion.div className="order-2 md:order-1" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl sm:text-4xl md:text-2xl font-extrabold tracking-wider text-[#5b2b2b] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                OUTDOOR THEME AREA
              </h2>
              <div className="w-20 h-1 bg-amber-400 rounded mb-4 sm:mb-6"></div>
              <h3 className="text-lg sm:text-xl md:text-2xl italic text-amber-400 font-medium mb-4 sm:mb-6" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                For Our Smoking Guests
              </h3>
              <p className="text-[#5b2b2b] leading-relaxed text-base sm:text-lg max-w-prose" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              We've created a comfortable outdoor space where you can enjoy your favorite beverages and cuisine in a relaxed, open-air environment. Our thoughtfully designed smoking area features traditional Bhutanese elements with comfortable seating, allowing you to savor your experience while respecting the comfort of all our guests.
              </p>
            </motion.div>

            <motion.div className="order-1 md:order-2 flex justify-center md:justify-end" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="w-full h-72 sm:h-96 md:w-[55rem] md:h-[42rem] rounded-2xl shadow-2xl overflow-hidden relative bg-white hover:shadow-black-300/50 hover:scale-105 transition-transform duration-500">
                <img src="https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8647.jpg" alt="Outdoor Theme Area" className="w-full h-full object-cover block transition-transform duration-500 hover:scale-102" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeOfferYou;
