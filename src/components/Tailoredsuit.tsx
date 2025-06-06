import wedding from "../assets/images/wedding.jpg";
import suit from "../assets/images/suit.jpg";
import mensuit from "../assets/images/mensuit.jpg";

export default function TailoredsuitCollection() {
  return (
    <section id="tailoredsuit" className="tailoredsuit min-h-screen bg-white py-16 px-4">
      {/* Header Section */}
      <div className="text-center max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-2xl font-medium mb-6 text-gray-900">
          TAILORED SUITS IN CAMPS BAY CAPE TOWN FOR ALL OCCASIONS
        </h2>
        <p className="max-w-18xl mx-auto text-gray-700 leading-relaxed">
          Discover bespoke suits for every occasion at Maestro Sarto. Our expert tailors craft custom-made suits tailored to your unique style and preferences, ensuring the perfect look for weddings and special events. Experience the art of bespoke tailoring with us
        </p>
      </div>

      {/* First Row of Images */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-7xl mx-auto">
        <img
          src={wedding}
          alt="Wedding Suit"
          className="w-full md:w-[700px] h-[500px] rounded-xl object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
        />
        <img
          src={suit}
          alt="Tailored Suit"
          className="w-full md:w-[700px] h-[500px] rounded-xl object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
        />
      </div>

      {/* Quote Text */}
      <div className="text-center mt-16 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-normal text-gray-600 mb-8">
          Beautifully crafted suits for the ultimate wardrobe.
        </h3>

        {/* Full Width Image */}
        <div className="max-w-[1500px] mx-auto px-4">
          <img
            src={mensuit}
            alt="Men's Suit"
            className="w-full h-[600px] md:h-[700px] rounded-xl object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110"
          />
        </div>
      </div>
    </section>
  );
}
