import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RestaurantNavbar from '../components/RestaurantNavbar.jsx';
import RestaurantFooter from '../components/RestaurantFooter.jsx';
import OurStory from '../components/OurStory.jsx';
import DzongriMenu from '../components/DzongriMenu.jsx';
import WeOfferYou from '../components/WeOfferYou.jsx';
import VisitUs from '../components/VisitUs.jsx';
import Last from '../components/Last.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Gallery from '../components/Gallery.jsx';

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

    

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/dzonggri%20%281%29.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(96,56,56,0.5)] z-10" />

        {/* Hero Content */}
        <motion.div
          className="relative h-full flex items-center justify-center px-4 z-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="text-center max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="flex items-center justify-center mb-8">
              <div className="h-px w-16 opacity-50 bg-white"></div>
              <div className="mx-4 text-sm tracking-widest font-light text-white" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                SINCE 2024
              </div>
              <div className="h-px w-16 opacity-50 bg-white"></div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-bold mb-6 leading-tight text-white"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              }}
            >
              DZONG<span style={{ color: '#f6ad55' }}>RI</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 font-light tracking-wide"
              style={{
                fontFamily: '"Montserrat", sans-serif',
                color: 'rgba(255,255,255,0.95)',
                textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
              }}
            >
              Traditional Himalayan Flavors, Modern Vibe.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#f6ad55', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 transform"
                style={{ fontFamily: '"Montserrat", sans-serif', backgroundColor: 'white', color: '#603838' }}
              >
                Explore Menu
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#f6ad55', borderColor: '#f6ad55', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 transform border-2 border-white"
                style={{ fontFamily: '"Montserrat", sans-serif', backgroundColor: 'transparent', color: 'white' }}
              >
                Reserve Table
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Page Sections with fade-in animation */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <motion.div variants={fadeInUp}><OurStory /></motion.div>
        <motion.div variants={fadeInUp}><DzongriMenu /></motion.div>
        <motion.div variants={fadeInUp}><WeOfferYou /></motion.div>
        <motion.div variants={fadeInUp}><Gallery /></motion.div>
        <motion.div variants={fadeInUp}><Last /></motion.div>
        <motion.div variants={fadeInUp}><Testimonials /></motion.div>
        <motion.div variants={fadeInUp}><VisitUs /></motion.div>
      </motion.div>


    </div>
  );
}

export { Hero };
