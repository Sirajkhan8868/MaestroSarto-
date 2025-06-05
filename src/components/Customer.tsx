import Tailored from "../assets/images/Tailored.jpg";
import Womansuit from "../assets/images/womensuit.jpg";
import Weddingsuit from "../assets/images/weddingsuit.jpg";

const Customer = () => {
  return (
    <section id="customer" className="section bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h6 className="text-xl md:text-3xl font-light text-black-700 mb-4 leading-tight tracking-wide">
            WHAT WE OFFER TO OUR CUSTOMERS
          </h6>
          <p className="font-medium text-base text-gray-500 leading-relaxed max-w-4xl mx-auto">
            We believe custom clothing experiences should be convenient and affordable to customers.
            Our team of stylists, designers & talented tailors work together to get you the best
            experience in getting your custom clothing online.
          </p>
          <h6 className="mt-6 text-xl md:text-2xl font-light text-black-700 px-4 tracking-wide leading-snug">
            CRAFTSMANSHIP PAR EXCELLENCE – PREMIUM GARMENTS – COMPETITIVE PRICES
          </h6>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <img
                src={Tailored}
                alt="Tailor measuring a client"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h5 className="text-lg md:text-xl font-medium text-black-500 mb-1">
                EXPERIENCE PERFECT
              </h5>
              <p className="text-gray-600">BESPOKE SUITS</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <img
                src={Womansuit}
                alt="Made to measure suits"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h5 className="text-lg md:text-xl font-medium text-black-500 mb-1">
                CREATING PERFECT
              </h5>
              <p className="text-gray-600">MADE TO MEASURE SUITS</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <img
                src={Weddingsuit}
                alt="Wedding tailored suit"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h5 className="text-lg md:text-xl font-medium text-black-500 mb-1">
                TAILOR MADE
              </h5>
              <p className="text-gray-600">WEDDING SUITS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
