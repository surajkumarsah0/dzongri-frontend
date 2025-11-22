import React from "react";
import { MoveRight } from "lucide-react";

// Example images (replace with your own paths)
const galleryImages = [
  "src/assets/images/IMG_8651.JPG",
  "src/assets/images/IMG_8652.JPG",
  "src/assets/images/IMG_8653.JPG",
  "src/assets/images/IMG_8654.JPG",
  "src/assets/images/IMG_8655.JPG",
  "src/assets/images/IMG_8656.JPG",
  "src/assets/images/IMG_8657.JPG",
  "src\\assets\\images\\IMG_8650.JPG",
  "src\\assets\\images\\IMG_8647.jpg",
  "src\\assets\\images\\a.jpg"
];

// Predefined “random” positions for a static look
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
    <section className="bg-[white] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wide mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            OUR GALLERY
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-amber-400 rounded"></div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-auto">
          {galleryImages.map((img, idx) => {
            const { colSpan, rowSpan } = staticPositions[idx % staticPositions.length];

            return (
              <div
                key={idx}
                className={`relative w-full h-48 md:h-64 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500`}
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
           <div className="mt-8 text-center">
              <button 
                    className="px-11 py-2 mt-4 rounded-full font-medium text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                    style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    backgroundColor: '#f6ad55',
                    color: 'white'
                    }}
               
              >
                <span className="relative z-10 flex items-center gap-2">Explore More <MoveRight /> </span>
              </button>
          </div>
    </section>
  );
};

export default Gallery;
