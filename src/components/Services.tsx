import showroom from "../assets/images/showroom.jpg";
import fashion from "../assets/images/fashion.jpg";
import virtual from "../assets/images/virtual.jpg";

const Service = () => {
  return (
    <section id="about" className="section bg-white py-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center">

          <h6 className="text-center text-2xl md:text-3xl font-light text-gray-900 mb-10 leading-snug">
            AT YOUR SERVICE EVERYDAY
          </h6>
        </div>
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8  py-8 rounded-md">

            {/* Left Image */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[490px] h-[500px] md:h-[500px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={showroom}
                  alt="Tailor measuring a client"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-light text-gray-800 my-5">VISIT OUR DESIGN STUDIO IN DUBAI
              </h1>
              <button className="bg-black text-white mb-5 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Book Now
              </button>
            </div>

            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[490px] h-[500px] md:h-[500px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={fashion}
                  alt="Tailor measuring a client"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-light text-gray-800 my-5">BOOK A HOME VISIT WITH OUR STYLIST
              </h1>
              <button className="bg-black text-white mb-5 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Book Now
              </button>
            </div>

            {/* Right Image */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[490px] h-[500px] md:h-[500px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={virtual}
                  alt="Woman in tailored suit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-light text-gray-800 my-5">BOOK A VIRTUAL APPOINTMENT

              </h1>
              <button className="bg-black text-white mb-5  text-normal py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Book Now
              </button>

            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Service;
