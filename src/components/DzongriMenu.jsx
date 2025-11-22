import React, { useEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_IMAGE = "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8657.JPG";

export default function DzongriMenu({ imageUrl = DEFAULT_IMAGE }) {
  const marqueeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  }, []);

  return (
    <section className="bg-[#fdf9f5] py-12 border-t border-b border-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wider mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            MENU
          </h3>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-amber-400 rounded"></div>
          </div>
        </motion.div>

        {/* Marquee */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={marqueeRef}
            className={`flex gap-6 items-stretch animate-marquee`}
            style={{
              whiteSpace: "nowrap",
              animationPlayState: isHovered ? "paused" : "running",
              animationDuration: "60s", // slower scroll
            }}
          >
            {Array.from({ length: 2 }).map((_, cycle) =>
              menuItems.map((item, idx) => (
                <motion.article
                  key={`${cycle}-${idx}`}
                  className="inline-block min-w-[240px] sm:min-w-[260px] max-w-[280px] sm:max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 cursor-pointer"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  <img
                    src={item.image || imageUrl}
                    alt={item.title}
                    className="w-full h-40 sm:h-44 object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold text-[#5b2b2b] text-lg">{item.title}</h5>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.desc}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-medium text-[#f6ad55]">{item.price}</span>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </div>

        {/* Explore Button */}
        <motion.div
  className="mt-8 flex justify-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <button
    className="px-8 sm:px-11 py-2 mt-4 rounded-full font-medium text-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
    style={{
      fontFamily: '"Montserrat", sans-serif',
      backgroundColor: "#f6ad55",
      color: "white",
    }}
  >
    <span className="flex items-center gap-2">
      Explore Menu <MoveRight />
    </span>
  </button>
</motion.div>

      </div>

      {/* Marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee linear infinite;
          }
        `}
      </style>
    </section>
  );
}

const menuItems = [
  {
    title: "Ema Datshi",
    desc: "A traditional Bhutanese dish made with chili peppers and cheese, served with red rice.",
    price: "₹ 1222",
    image: "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8651.JPG",
  },
  {
    title: "Phaksha Paa",
    desc: "Sliced pork cooked with radish and dried chilies, a flavorful and hearty dish.",
    price: "₹ 1500",
    image: "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8652.JPG",
  },
  {
    title: "Jasha Maru",
    desc: "Spicy chicken stew with tomatoes, garlic, and ginger, served with rice.",
    price: "₹ 1400",
    image: "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8653.JPG",
  },
  {
    title: "Momo",
    desc: "Steamed dumplings filled with minced meat or vegetables, served with a spicy dipping sauce.",
    price: "₹ 1300",
    image: "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8654.JPG",
  },
  {
    title: "Red Rice",
    desc: "A staple in Bhutanese cuisine, served as a side dish with various curries and stews.",
    price: "₹ 1000",
    image: "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8655.JPG",
  },
  {
    title: "Suja (Butter Tea)",
    desc: "Traditional Bhutanese tea made with butter and salt, perfect for warming up on a cold day.",
    price: "₹ 800",
    image: "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8656.JPG",
  },
];
