// DzongriCuisineHero.jsx
// React + Tailwind single-file component
// Usage: copy this file into your React app (Create React App / Vite) and ensure Tailwind CSS is configured.
// Image used from local path: /mnt/data/9d535d24-a6d7-4545-bcde-2ead62e4607d.png

import React from 'react';

import { motion } from 'framer-motion';

// #fdf9f5

export default function OurStory({ imageUrl = '../../src/assets/images/IMG_8653.JPG' }) {
  return (
    <section className="bg-[white] py-30">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-wider text-[#5b2b2b] mb-4" style={{fontFamily: '"Playfair Display", serif'}}>
              DZONG<span style={{ color: '#f6ad55' }}>RI</span> CUISINE
            </h1>
            <div className="w-20 h-1 bg-amber-400 rounded mb-6"></div>

            <h2 className="text-xl md:text-2xl italic text-amber-400 font-medium mb-6" style={{fontFamily: '"Montserrat", sans-serif'}}>
              Inspired by Bhutanese Tradition
            </h2>

            <p className="text-[#5b2b2b] leading-relaxed text-lg md:text-base max-w-prose" style={{fontFamily: '"Montserrat", sans-serif'}}>
              At Dzongri Cuisine, our restaurant is deeply inspired by the warmth,
              simplicity, and rich cultural heritage of Bhutanese style. From the
              earthy tones of our decor to the authentic flavors in every dish, we
              bring the essence of Bhutan right to your table. Our goal is to create
              a dining experience that reflects the peaceful spirit of Bhutan — with
              traditional recipes, handcrafted ambiance, and heartfelt hospitality
              that makes you feel at home.
            </p>
          </div>

          {/* Right image card */}
          <div className="order-2 md:order-2 flex justify-center md:justify-end ">
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            <div className="w-full max-w-md md:max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative bg-white hover:shadow-black-300/50 hover:scale-105 transition-transform duration-500">
              
            <img
                src={imageUrl}
                alt="Authentic Bhutanese Dumpling"
                className="w-full  md:h-96 object-cover block hover:scale-102 transition-transform duration-500"
              />

              {/* bottom caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#6b3e3e] text-[#f6ad55] text-center py-3 font-medium">
                Authentic Bhutanese Dumpling
              </div>
            </div>
              </motion.div>
          </div>
        </div>

        {/* Lower section title */}
        <div className="mt-28 text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wider mb-4" style={{fontFamily: '"Playfair Display", serif'}}>
            Our Story
          </h3>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-amber-400 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
