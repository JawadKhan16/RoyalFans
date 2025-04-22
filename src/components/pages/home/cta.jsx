'use client';

const CTASection = () => {
  return (
    <section className=" bg-[#3b2f2f] text-white py-25 px-5 md:px-12 ">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#d2a679]">
            Looking for Powerful Cooling Solutions?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Explore our wide range of energy-efficient fans, coolers, and appliances today!
          </p>
          <a
            href="/shop"
            className="inline-block bg-[#d2a679] hover:bg-[#b88d61] text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Buy Now
          </a>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="/Home/cta.png"
            alt="Cooling Appliance"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
