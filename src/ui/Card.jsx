const Card = ({ image, name, description, price }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Dish Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#6b3e3e] mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#f6ad55] font-bold text-lg">${price}</span>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
