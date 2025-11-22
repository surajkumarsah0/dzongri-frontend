import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const RestaurantFooter = () => {
  return (
    <footer style={{ background: 'linear-gradient(to bottom, #503030, #603838)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold">DZONG<span style={{ color: '#f6ad55' }}>RI</span></h2>
            <p className="text-sm opacity-80 leading-6 p-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              Experience culinary excellence with authentic flavors and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative group"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f6ad55' }}></span>
                <Facebook size={20} className="relative z-10" style={{ color: 'white' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative group"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f6ad55' }}></span>
                <Instagram size={20} className="relative z-10" style={{ color: 'white' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative group"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
         
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f6ad55' }}></span>
                <Twitter size={20} className="relative z-10" style={{ color: 'white' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 " style={{ fontFamily: '"Playfair Display", serif' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm " style={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: '"Montserrat", sans-serif' }}>
              {['Home', 'Menu', 'About Us', 'Reservations', 'Gallery', 'Blog'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-all duration-300 inline-block relative group"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#f6ad55' }}></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>Opening Hours</h3>
            <ul className="space-y-2 text-sm " style={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: '"Montserrat", sans-serif' }}>
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold text-white">10:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-white">10:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>Contact Us</h3>
            <ul className="space-y-3" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              <li className="flex items-start space-x-3 group" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                <MapPin size={20} className="flex-shrink-0 mt-1 transition-colors duration-300" style={{ color: '#f6ad55' }} />
                <span className="text-sm group-hover:text-white transition-colors duration-300">
                  123 Culinary Street, Food District, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3 group" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                <Phone size={20} className="flex-shrink-0 transition-colors duration-300" style={{ color: '#f6ad55' }} />
                <span className="text-sm group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center space-x-3 group" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                <Mail size={20} className="flex-shrink-0 transition-colors duration-300" style={{ color: '#f6ad55' }} />
                <span className="text-sm group-hover:text-white transition-colors duration-300">
                  info@delicioso.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: '"Montserrat", sans-serif' }}>
            © 2024 DZONGRI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-sm transition-all duration-300 relative group"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              <span className="relative">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#f6ad55' }}></span>
              </span>
            </a>
            <a 
              href="#" 
              className="text-sm transition-all duration-300 relative group"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              <span className="relative">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#f6ad55' }}></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default RestaurantFooter;