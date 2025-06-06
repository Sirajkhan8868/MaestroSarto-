import Tailored from "../assets/images/Tailored.jpg";
import Womansuit from "../assets/images/womensuit.jpg";
import Weddingsuit from "../assets/images/weddingsuit.jpg";

const Customer = () => {
  return (
    <section id="customer" className="section bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 px-4 md:px-0">
          <h6 className="text-xl md:text-3xl font-light text-gray-800 mb-4 leading-tight tracking-wide">
            WHAT WE OFFER TO OUR CUSTOMERS
          </h6>
          <p className="font-normal text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
            We believe custom clothing experiences should be convenient and affordable to customers.
            Our team of stylists, designers & talented tailors work together to get you the best
            experience in getting your custom clothing online.
          </p>
          <h6 className="mt-4 text-lg md:text-xl font-light text-gray-800 px-1 md:px-0 tracking-wide leading-snug">
  CRAFTSMANSHIP PAR EXCELLENCE – PREMIUM GARMENTS – COMPETITIVE PRICES
</h6>

        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <img
                src={Tailored}
                alt="Tailor measuring a client"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h5 className="text-lg md:text-xl font-medium text-gray-900 mb-1">
                EXPERIENCE PERFECT
              </h5>
              <p className="text-gray-600 uppercase tracking-wide">BESPOKE SUITS</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <img
                src={Womansuit}
                alt="Made to measure suit"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h5 className="text-lg md:text-xl font-medium text-gray-900 mb-1">
                CREATING PERFECT
              </h5>
              <p className="text-gray-600 uppercase tracking-wide">MADE TO MEASURE SUITS</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <img
                src={Weddingsuit}
                alt="Wedding tailored suit"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h5 className="text-lg md:text-xl font-medium text-gray-900 mb-1">
                TAILOR MADE
              </h5>
              <p className="text-gray-600 uppercase tracking-wide">WEDDING SUITS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
