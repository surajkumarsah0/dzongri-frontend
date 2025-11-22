import React, { useState, useEffect } from 'react';
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <RestaurantNavbar />
      
      {/* Hero Section with Background Video */}
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
          {/* Replace this URL with your video path */}
          <source src="src\assets\videos\dzonggri.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text readability */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: 'rgba(96, 56, 56, 0.5)',
            zIndex: 1 
          }}
        ></div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ zIndex: 2 }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>

        {/* Gradient Overlays */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(246, 173, 85, 0.15) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 2
          }}
        ></div>
        
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 70% 60%, rgba(96, 56, 56, 0.4) 0%, transparent 50%)',
            transform: `translateY(${scrollY * -0.2}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 2
          }}
        ></div>

        {/* Main Content */}
        <div className="relative h-full flex items-center justify-center px-4" style={{ zIndex: 10 }}>
          <div className="text-center max-w-5xl mx-auto">
            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 opacity-50 bg-white"></div>
              <div className="mx-4 text-sm tracking-widest font-light text-white" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                SINCE 2024
              </div>
              <div className="h-px w-16 opacity-50 bg-white"></div>
            </div>

            {/* Main Heading */}
            <h1 
              className="font-bold mb-6 leading-tight text-white"
              style={{ 
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              DZONG<span style={{ color: '#f6ad55' }}>RI</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl md:text-2xl mb-12 font-light tracking-wide"
              style={{ 
                fontFamily: '"Montserrat", sans-serif',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
                transform: `translateY(${scrollY * 0.15}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
             Traditional Himalayan Flavors, Modern Vibe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                    className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                    style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    backgroundColor: 'white',
                    color: '#603838'
                    }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f6ad55';
                    e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#603838';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span className="relative z-10">Explore Menu</span>
              </button>

              <button 
                className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 transform hover:scale-105 border-2 group"
                style={{ 
                  fontFamily: '"Montserrat", sans-serif',
                  borderColor: 'white',
                  color: 'white',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f6ad55';
                  e.currentTarget.style.borderColor = '#f6ad55';
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'white';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Reserve Table
              </button>
            </div>
           
          </div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 blur-3xl"
          style={{ 
            backgroundColor: '#f6ad55',
            transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 3
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ 
            backgroundColor: '#f6ad55',
            transform: `translate(${scrollY * -0.15}px, ${scrollY * -0.1}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 3
          }}
        ></div>
      </div>

      {/* Content Section */}
      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            }
            `}</style>
            <OurStory />
      <DzongriMenu />
      <WeOfferYou />
      <Gallery />
      <Last />
      <Testimonials />  
        <VisitUs /> 
      <RestaurantFooter />
    </div>
  );
}

export { Hero };