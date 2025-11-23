import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Search, CookingPot } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import image from "../../src/assets/images/IMG_8653.JPG"
// Menu items (30 items with categories)
export const menuItems = [
  // Starters
  { id: 1, name: "Bruschetta", description: "Grilled bread with tomato & basil.", price: 4.5, category: "Starters", image },
  { id: 2, name: "Garlic Bread", description: "Toasted bread with garlic butter.", price: 3.5, category: "Starters", image },
  { id: 3, name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese & herbs.", price: 5.0, category: "Starters", image },
  { id: 4, name: "Paneer Tikka", description: "Spicy grilled paneer cubes.", price: 6.0, category: "Starters", image },
  { id: 5, name: "Chicken Wings", description: "Crispy wings with hot sauce.", price: 7.5, category: "Starters", image },
  // Main Course
  { id: 6, name: "Margherita Pizza", description: "Classic cheese and tomato pizza.", price: 12.99, category: "Main Course", image },
  { id: 7, name: "Veggie Burger", description: "Delicious burger with fresh veggies.", price: 10.5, category: "Main Course", image },
  { id: 8, name: "Grilled Chicken", description: "Juicy grilled chicken with herbs.", price: 14.0, category: "Main Course", image },
  { id: 9, name: "Pasta Alfredo", description: "Creamy pasta with parmesan.", price: 11.5, category: "Main Course", image },
  { id: 10, name: "Beef Steak", description: "Tender beef steak with sides.", price: 18.0, category: "Main Course", image },
  { id: 11, name: "Paneer Butter Masala", description: "Rich & creamy paneer curry.", price: 12.0, category: "Main Course", image },
  { id: 12, name: "Fish & Chips", description: "Crispy fried fish with fries.", price: 13.5, category: "Main Course", image },
  // Soups
  { id: 13, name: "Tomato Soup", description: "Fresh tomato soup with herbs.", price: 5.5, category: "Soups", image },
  { id: 14, name: "Chicken Noodle Soup", description: "Warm chicken broth with noodles.", price: 6.0, category: "Soups", image },
  { id: 15, name: "Mushroom Soup", description: "Creamy mushroom soup.", price: 5.8, category: "Soups", image },
  { id: 16, name: "Vegetable Soup", description: "Fresh veggies in clear broth.", price: 5.0, category: "Soups", image },
  { id: 17, name: "Lentil Soup", description: "Healthy lentil soup with spices.", price: 4.5, category: "Soups", image },
  // Traditional Dishes
//   remove image links and use imported image variable
  { id: 18, name: "Momo", description: "Steamed Nepali dumplings.", price: 6.5, category: "Traditional Dishes", image },
  { id: 19, name: "Thukpa", description: "Traditional noodle soup.", price: 7.0, category: "Traditional Dishes", image },
  { id: 20, name: "Dal Bhat", description: "Rice with lentil soup & veggies.", price: 8.0, category: "Traditional Dishes", image },
  { id: 21, name: "Sel Roti", description: "Sweet Nepali rice donut.", price: 3.5, category: "Traditional Dishes", image },
  { id: 22, name: "Gundruk Soup", description: "Fermented leafy greens soup.", price: 6.0, category: "Traditional Dishes", image },
  { id: 23, name: "Kwati", description: "Mixed bean soup, traditional dish.", price: 7.0, category: "Traditional Dishes", image },
  // Drinks
//   same here, use imported image variable
  { id: 24, name: "Mango Smoothie", description: "Fresh mango blended with yogurt.", price: 4.5, category: "Drinks", image },
  { id: 25, name: "Lassi", description: "Traditional yogurt-based drink.", price: 3.5, category: "Drinks", image },
  { id: 26, name: "Lemonade", description: "Fresh lemon juice with mint.", price: 3.0, category: "Drinks", image },
  { id: 27, name: "Iced Tea", description: "Chilled tea with lemon.", price: 3.5, category: "Drinks", image },
  { id: 28, name: "Coffee", description: "Hot brewed coffee.", price: 2.5, category: "Drinks", image },
  { id: 29, name: "Green Tea", description: "Healthy green tea.", price: 2.5, category: "Drinks", image },
  { id: 30, name: "Orange Juice", description: "Freshly squeezed orange juice.", price: 4.0, category: "Drinks", image },
];

const Menu = () => {
  const categories = ["Starters", "Main Course", "Soups", "Traditional Dishes", "Drinks"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered items based on category & search
  const filteredItems = menuItems.filter((item) => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full h-auto mt-16 pt-8 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl md:text-3xl font-extrabold text-[#5b2b2b] tracking-wider mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
          MENU
        </h3>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-amber-400 rounded"></div>
        </div>
        <h2 className="text-xl md:text-2xl italic text-amber-400 font-medium mt-2" style={{ fontFamily: '"Montserrat", "sans-serif"' }}>
          ~A menu full of flavor, love, and culinary magic.
        </h2>
      </motion.div>

      {/* Search Bar */}
      <motion.form
        className="flex items-center max-w-lg mx-auto space-x-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CookingPot className="w-4 h-4 text-[#6b3e3e]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-[#6b3e3e] block w-full pl-9 pr-3 py-2.5 text-heading text-sm rounded-full focus:ring-[#f6ad55] focus:border-[#f6ad55] shadow-sm placeholder:text-body"
            placeholder="Search your favorite dishes..."
          />
        </div>
        <motion.button
          type="submit"
          className="inline-flex items-center bg-[#f6ad55] text-white rounded-full hover:bg-[#ed8936] px-4 py-2.5 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f6ad55]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="w-4 h-4 mr-1" /> Search
        </motion.button>
      </motion.form>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto mb-8">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-5 py-2.5 text-sm font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f6ad55] ${
            activeCategory === "All" ? "bg-[#f6ad55] text-white hover:bg-[#ed8936]" : "bg-white text-[#6b3e3e] border border-[#6b3e3e] hover:bg-[#f6ad55] hover:text-white"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 text-sm font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f6ad55] ${
              activeCategory === category ? "bg-[#f6ad55] text-white hover:bg-[#ed8936]" : "bg-white text-[#6b3e3e] border border-[#6b3e3e] hover:bg-[#f6ad55] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="bg-[#fdf9f5] py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
