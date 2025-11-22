import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';



const RestaurantNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
      }`}
      style={isScrolled ? { backgroundColor: 'rgba(255, 255, 255, 0.95)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 pointer-events-none ">
            <h1
              className="text-3xl font-serif font-bold transition-all duration-300"
              style={isScrolled ? { color: '#603838' } : { color: 'white' }}
            >
              DZONG<span style={{ color: '#f6ad55' }}>RI</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-md font-medium transition-all duration-300 relative group"
                style={isScrolled ? { color: '#603838' } : { color: 'white' }}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: '#f6ad55' }}
                ></span>
              </a>
            ))}
            <button
              className="ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#603838', color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f6ad55';
                e.currentTarget.style.color = '#603838';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#603838';
                e.currentTarget.style.color = 'white';
              }}
            >
              Book Table
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors duration-300"
              style={isScrolled ? { color: '#603838' } : { color: 'white' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } backdrop-blur-md`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group"
              style={{ color: '#ffffff' }}
             
            >
              {link.name}
              <span
                className="absolute bottom-2 left-4 right-1 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: '#f6ad55' }}
              ></span>
            </a>
          ))}
          <button 
            className="w-full px-4 py-3 mt-2 rounded-lg font-medium transition-colors duration-300"
            style={{ backgroundColor: '#603838', color: 'white' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f6ad55';
              e.currentTarget.style.color = '#603838';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#603838';
              e.currentTarget.style.color = 'white';
            }}
          >
            Book Table
          </button>
        </div>
      </div>
    </nav>
  );
};
export default RestaurantNavbar;