import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8647.jpg",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8650.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8651.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8652.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8653.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8654.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8655.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8656.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8657.JPG",
  "https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/a.jpg",
];

const staticPositions = [
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 2 },
];

const Gallery = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wide mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            OUR GALLERY
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-amber-400 rounded"></div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 auto-rows-auto">
          {galleryImages.map((img, idx) => {
            const { colSpan, rowSpan } = staticPositions[idx % staticPositions.length];

            return (
              <motion.div
                key={idx}
                className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>

        {/* Explore Button */}
        <motion.div className="mt-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <button
            className="px-8 sm:px-11 py-2 mt-4 rounded-full font-medium text-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
            style={{ fontFamily: '"Montserrat", sans-serif', backgroundColor: "#f6ad55", color: "white" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore More <MoveRight />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
