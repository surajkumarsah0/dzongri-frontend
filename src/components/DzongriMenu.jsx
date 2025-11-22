// DzongriMenu.jsx
// React + Tailwind component (JSX)
// Uses local image: /mnt/data/9d535d24-a6d7-4545-bcde-2ead62e4607d.png
// Paste into your project and import where needed.

import React, { useEffect, useRef } from "react";
import { MoveRight } from "lucide-react";

const DEFAULT_IMAGE = "../../src/assets/images/IMG_8655.JPG";

export default function DzongriMenu({ imageUrl = DEFAULT_IMAGE }) {
  const menuRef = useRef(null);
  const marqueeRef = useRef(null);

  // Pause animation if user prefers reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  }, []);

  // Ensure marquee duplicates are wide enough for seamless scrolling.
  // No JS resizing required for this implementation; duplicates handled in markup.


  return (
    <div className="">
      {/* Menu Section */}
      <section
        ref={menuRef}
        className="bg-[#fdf9f5] py-12 border-t border-b border-transparent"
      >
        <div className="max-w-6xl mx-auto px-6">
           <div className=" text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wider mb-4" style={{fontFamily: '"Playfair Display", serif'}}>
            MENU
          </h3>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-amber-400 rounded"></div>
          </div>
        </div>

          {/* Auto-scrolling marquee */}
          <div className="relative overflow-hidden">
            {/* marquee track: duplicated list for seamless animation */}
            <div
              ref={marqueeRef}
              className="marquee flex items-stretch gap-6"
              // accessibility: allow stop on focus/hover
              onMouseEnter={() => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "paused"; }}
              onMouseLeave={() => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "running"; }}
              onFocus={() => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "paused"; }}
              onBlur={() => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "running"; }}
            >
              {/* render two cycles of items for continuous scroll */}
              {Array.from({ length: 2 }).map((_, cycle) => (
                <div key={cycle} className="inline-flex gap-6 items-stretch pr-6">
                  {menuItems.map((item, idx) => (
                    <article
                      key={`${cycle}-${idx}`}
                      className="min-w-[260px] max-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
                      tabIndex={0}
                      aria-label={`Menu item ${item.title}`}
                    >
                      <img
                        src={item.image || imageUrl}
                        alt={item.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4 ">
                        <h5 className="font-semibold text-[#5b2b2b]">{item.title}</h5>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.desc}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-medium text-[#f6ad55]">{item.price}</span>
                        
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>

            {/* Soft fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fffaf7] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fffaf7] to-transparent" />
          </div>

          {/* Explore button */}
          <div className="mt-8 text-center">
              <button 
                    className="px-11 py-2 mt-4 rounded-full font-medium text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                    style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    backgroundColor: '#f6ad55',
                    color: 'white'
                    }}
               
              >
                <span className="relative z-10 flex items-center gap-2">Explore Menu <MoveRight /> </span>
              </button>
          </div>
        </div>
        
      </section>

      {/* local styles for marquee animation */}
      <style>{`
        /* marquee: translate from 0 -> -50% so duplicated content flows */
        .marquee {
          display: flex;
          /* large duration for relaxed scroll; adjust as needed */
          animation: marqueeAnim 24s linear infinite;
          will-change: transform;
        }
        .marquee:focus {
          outline: none;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeAnim {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* small utility: clamp lines (requires Tailwind line-clamp plugin for production) */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}

// sample menu items - replace with real images/data as needed
const menuItems = [
  {
    title: "Ema Datshi",
    desc: "Traditional Bhutanese cheese & chili stew served with red rice; comforting & spicy.",
    price: "₹ 350 ",
    image: DEFAULT_IMAGE,
  },
  {
    title: "Hoentay",
    desc: "Buckwheat dumplings filled with spinach & cheese, lightly steamed and served warm.",
    price: "₹ 300",
    image: DEFAULT_IMAGE,
  },
  {
    title: "Momos",
    desc: "Steamed dumplings (chicken or veg) served with our house dipping sauce.",
    price: "₹ 250",
    image: DEFAULT_IMAGE,
  },
  {
    title: "Red Rice Bowl",
    desc: "Nutritious Bhutanese red rice with seasonal vegetables and light spices.",
    price: "₹ 280",
    image: DEFAULT_IMAGE,
  },
  {
    title: "Sukha Phaksha",
    desc: "Smoky-spiced pork with local herbs, paired with steamed rice and pickles.",
    price: "₹ 420",
    image: DEFAULT_IMAGE,
  },
];
