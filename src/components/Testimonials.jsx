import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    content: "An extraordinary dining experience! The attention to detail in every dish is remarkable. Savoria sets the standard for fine dining.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Regular Guest",
    content: "The ambiance, service, and cuisine are all exceptional. This is our go-to restaurant for special occasions. Never disappoints!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Food Enthusiast",
    content: "From the moment you walk in, you're transported to culinary paradise. The wagyu steak is the best I've ever had. Absolutely worth every penny.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-[white]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#5b2b2b] mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            WHAT OUR GUESTS SAY
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-amber-400 rounded"></div>
          </div>
          <p
            className="text-xl italic text-[#f6ad55]"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            Testimonials from our valued patrons
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 relative shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#5b2b2b]/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#f6ad55]"
                  />
                ))}
              </div>

              <p
                className="text-[#5b2b2b] mb-6 italic text-base sm:text-lg"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                "{testimonial.content}"
              </p>

              <div>
                <p
                  className="font-serif text-lg sm:text-xl font-semibold text-[#5b2b2b]"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-sm sm:text-base text-[#f6ad55]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
