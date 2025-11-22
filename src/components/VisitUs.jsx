import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const VisitUs = () => {
  return (
    <section className="bg-[#fdf9f5] py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wide mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            VISIT US
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-amber-400 rounded"></div>
          </div>
        </motion.div>

        {/* Address & Map */}
        <div className="md:flex md:items-start md:justify-between gap-6 md:gap-12">
          {/* Address Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-left"
          >
            <h3
              className="text-2xl font-bold text-[#5b2b2b] mb-3"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              OUR LOCATION
            </h3>
            <p className="text-[#5b2b2b]/90 mb-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              123 Delicious Street, Culinary City, Country
            </p>
            <p className="text-[#5b2b2b]/90 mb-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              Phone: +123 456 7890
            </p>
            <p className="text-[#5b2b2b]/90 mb-4" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              Email: contact@restaurant.com
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6"
            >
              <a
                href="https://www.google.com/maps/dir//DZONGRI+cuisine,+Thimphu,+Bhutan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-11 py-2 rounded-full font-medium text-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  backgroundColor: "#f6ad55",
                  color: "white",
                }}
              >
                Get Directions <MoveRight />
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 h-80 md:h-96 shadow-lg rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.74159041910255!2d87.69762270890368!3d26.661566259249536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e591006def1863%3A0xe88077c2b3c04aa3!2sDZONGRI%20cuisine!5e1!3m2!1sen!2snp!4v1751652243621!5m2!1sen!2snp"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
