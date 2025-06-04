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
          Bespoke suits for every occasion. At Maestro Sarto, we specialize in creating custom made suits that are
          tailored to your unique style and preferences. Our tailoring <br />experts  can help you create the perfect look for
          your wedding and special event. Experience the art of bespoke tailoring at Maestro Sarto.
        </p>
      </div>

      {/* First Row of Images */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-7xl mx-auto">
        <img
          src={wedding}
          alt="Wedding Suit"
          className="w-full md:w-[700px] h-[500px] rounded-xl object-cover shadow-md"
        />
        <img
          src={suit}
          alt="Tailored Suit"
          className="w-full md:w-[700px] h-[500px] rounded-xl object-cover shadow-md"
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
            className="w-full h-[600px] md:h-[700px] rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
