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
    <section className="py-20 px-12 bg-[white]">
      <div className="max-w-7xl mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4" style={{ color: '#5b2b2b', fontFamily  : '"Playfair Display", serif' }}>
            WHAT OUR GUESTS SAY
          </h2>
           <div className="flex justify-center">
            <div className="w-16 h-1 bg-amber-400 rounded"></div>
          </div>
      
          <p className="text-muted-foreground text-xl italic" style={{ color: '#f6ad55', fontFamily  : '"Montserrat", sans-serif' }}>
            Testimonials from our valued patrons
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8  relative shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 text-[#5b2b2b]" />
              
              <div className="flex gap-1 mb-4 ">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary text-[#f6ad55] "
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic " style={{ color: '#5b2b2b', fontFamily  : '"Montserrat", sans-serif' }}>
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-serif text-lg font-semibold text-foreground text-[#5b2b2b]" style={{ fontFamily  : '"Playfair Display", serif' }}>
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground text-[#f6ad55]" style={{ fontFamily  : '"Montserrat", sans-serif' }}>
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