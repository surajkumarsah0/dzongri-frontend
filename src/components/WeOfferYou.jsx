

const WeOfferYou = () => {
    return (
<>

        <section className="bg-[white] py-30 h-auto">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className=" text-center mb-12">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-[#5b2b2b] tracking-wider mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                            WE OFFER YOU
                        </h3>
                        <div className="flex justify-center">
                            <div className="w-16 h-1 bg-amber-400 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    {/* Left content */}


                    <div className="order-2 md:order-1 flex justify-center md:justify-end">
                        <div className="w-full h-[30rem] md:w-[46rem] md:h-[30rem] rounded-2xl shadow-2xl overflow-hidden relative bg-white hover:shadow-black-300/50 hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8651.JPG"
                                alt="Authentic Bhutanese Dumpling"
                                className="w-full h-full object-cover block hover:scale-102 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-2xl font-extrabold tracking-wider text-[#5b2b2b] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                            AN UNFORGETTABLE DINING EXPERIENCE
                        </h2>
                        <div className="w-20 h-1 bg-amber-400 rounded mb-6"></div>
                        <p className="text-[#5b2b2b] leading-relaxed text-lg md:text-base max-w-prose" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Indulge in culinary excellence with our chef's signature creations, crafted from the finest ingredients and served in an ambiance of sophistication.
                        </p>
                    </div>


                </div>
            </div>
        </section>
        <section className="bg-[#fdf9f5] py-30 h-auto">
            <div className="max-w-6xl mx-auto px-6 py-20">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    {/* Left content */}


                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="w-full h-[30rem] md:w-[55rem] md:h-[42rem] rounded-2xl shadow-2xl overflow-hidden relative bg-white hover:shadow-black-300/50 hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://ppguwyrgcucnxb3f.public.blob.vercel-storage.com/IMG_8647.jpg"
                                alt="Authentic Bhutanese Dumpling"
                                className="w-full h-full object-cover block hover:scale-102 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl md:text-2xl font-extrabold tracking-wider text-[#5b2b2b] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                           OUTDOOR THEME AREA
                        </h2>
                        <div className="w-20 h-1 bg-amber-400 rounded mb-6"></div>
                        <h3 className="text-xl md:text-2xl italic text-amber-400 font-medium mb-6" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            For Our Smoking Guests
                        </h3>
                        <p className="text-[#5b2b2b] leading-relaxed text-lg md:text-base max-w-prose" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                          We've created a comfortable outdoor space where you can enjoy your favorite beverages and cuisine in a relaxed, open-air environment. Our thoughtfully designed smoking area features traditional Bhutanese elements with comfortable seating, allowing you to savor your experience while respecting the comfort of all our guests.
                        </p>
                    </div>


                </div>
            </div>
        </section>
       
</>


    )
}

export default WeOfferYou
