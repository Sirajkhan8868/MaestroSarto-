import showroom from "../assets/images/showroom.jpg";
import fashion from "../assets/images/fashion.jpg";
import virtual from "../assets/images/virtual.jpg";

const Service = () => {
  return (
    <section id="services" className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h6 className="text-2xl md:text-3xl font-light text-gray-900 leading-snug">
            AT YOUR SERVICE EVERYDAY
          </h6>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Template */}
          {[{
            img: showroom,
            title: "VISIT OUR DESIGN MAESTRO SARTO"
          }, {
            img: fashion,
            title: "BOOK A HOME VISIT WITH OUR STYLIST"
          }, {
            img: virtual,
            title: "BOOK A VIRTUAL APPOINTMENT"
          }].map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 text-center flex flex-col flex-grow">
                <h1 className="text-lg font-light text-gray-800 mb-3">
                  {card.title}
                </h1>
                <button
                  className="bg-black text-white text-sm font-medium h-10 w-28 rounded hover:bg-gray-900 transition mx-auto"
                >
                  Book Now
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
