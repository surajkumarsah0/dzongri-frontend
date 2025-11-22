import React from "react";
import { FaUtensils, FaUserTie, FaHandsWash } from "react-icons/fa";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Passion for Food",
    description:
      "We cook with love and passion, ensuring every dish is a delightful experience for your taste buds.",
    icon: <FaUtensils className="text-amber-400 w-12 h-12 mb-4 mx-auto" />,
  },
  {
    title: "Professional Chefs",
    description:
      "Our skilled chefs bring years of experience and creativity to every plate we serve.",
    icon: <FaUserTie className="text-amber-400 w-12 h-12 mb-4 mx-auto" />,
  },
  {
    title: "Hygiene & Cleanliness",
    description:
      "We maintain the highest standards of hygiene and cleanliness in the kitchen and dining area.",
    icon: <FaHandsWash className="text-amber-400 w-12 h-12 mb-4 mx-auto" />,
  },
];

const Last = () => {
  return (
    <section className="bg-[#fdf9f5] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wide mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            WHY CHOOSE US <span className="text-[#f6ad55]">?</span>
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-20 h-1 bg-amber-400 rounded"></div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {feature.icon}
              <h3 className="text-2xl font-bold text-[#5b2b2b] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#5b2b2b]/90 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button
            className="px-11 py-2 mt-4 rounded-full font-medium text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
            style={{
              fontFamily: '"Montserrat", sans-serif',
              backgroundColor: "#f6ad55",
              color: "white",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Table <MoveRight />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Last;
