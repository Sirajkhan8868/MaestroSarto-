import suitimage from "../assets/images/suitimage.jpg";
import Tailored from "../assets/images/Tailored.jpg";
import Womansuit from "../assets/images/womensuit.jpg";
import Weddingsuit from "../assets/images/weddingsuit.jpg";

const Customer = () => {
  return (
    <section id="customer" className="section bg-white py-6">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h6 className="text-center text-xl md:text-3xl font-light text-black-700 mb-2 leading-tight tracking-wide">
            WHAT WE OFFER TO OUR CUSTOMERS
          </h6>
          <p className="font-medium text-bold text-base text-gray-500 leading-relaxed">
            We believe custom clothing experiences should be convenient and affordable to customers. Our team of stylist, designers & talented tailors worked together to get <br />
            you the best experience in getting your custom clothing online.
          </p>

          <h6 className="text-center mt-8 text-xl md:text-2xl font-light text-black-700 px-4 tracking-wide leading-snug">
            CRAFTSMANSHIP PAR EXCELLENCE – PREMIUM GARMENTS – COMPETITIVE PRICES
          </h6>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 rounded-md">
            {/* Card 1 */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[490px] h-[500px] md:h-[750px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={Tailored}
                  alt="Tailor measuring a client"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h5 className="text-center text-lg md:text-xl font-medium text-black-500 mt-4 mb-2 leading-tight tracking-wide">
                EXPERIENCE PERFECT
              </h5>
              <p className="mb-4">BESPOKE SUITS</p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[490px] h-[500px] md:h-[750px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={Womansuit}
                  alt="Tailor measuring a client"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h5 className="text-center text-lg md:text-xl font-medium text-black-500 mt-4 mb-2 leading-tight tracking-wide">
                CREATING PERFECT
              </h5>
              <p className="mb-4 text-sm md:text-base">MADE TO MEASURE SUITS</p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[490px] h-[500px] md:h-[750px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={Weddingsuit}
                  alt="Wedding tailored suit"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h5 className="text-center text-lg md:text-2xl font-medium text-black-500 mt-4 mb-2 leading-tight tracking-wide">
                TAILOR MADE
              </h5>
              <p className="mb-4">WEDDING SUITS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
