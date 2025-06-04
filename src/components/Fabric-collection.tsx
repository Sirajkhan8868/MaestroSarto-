import Huddersfield from "../assets/images/Huddersfield.jpg";
import vitale from "../assets/images/Vitale.png";
import Lanificio from "../assets/images/Lanificio.png";
import drago from "../assets/images/drago.png";
import Tessitura from "../assets/images/Tessitura.webp";
import Holland from "../assets/images/Holland.png";
import DORMAUIL from "../assets/images/DORMEUIL.webp";
import Reda from "../assets/images/Reda.webp";

const images = [Huddersfield, vitale, Lanificio, drago, Tessitura, Holland, DORMAUIL, Reda];

export default function FabricCollection() {
  return (
    <section id="fabric-collection" className="section bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900">
            FABRIC COLLECTION
          </h1>
          <p className="mt-6 max-w-18xl mx-auto text-gray-600 text-lg leading-relaxed">
            We exclusively offer some of the finest and internationally renowned fabric houses from Switzerland, UK and
            Italy under one roof. Maestro Sarto is the name to reckon with. We strive hard to exceed our customer's
            expectations and this is possible only because we pay close attention to the texture, versatility, and beauty
            of the fabrics.
          </p>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="overflow-hidden">
          <div
            className="flex animate-scroll whitespace-nowrap"
            style={{ gap: "2rem" }}
          >
            {/* Duplicate images array twice for seamless loop */}
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-lg p-4 "
                style={{ width: "200px" }}
              >
                <img
                  src={src}
                  alt={`Fabric Brand ${index + 1}`}
                  className="max-w-full h-auto mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Custom styles for animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
