import img from "../assets/images/img.jpg";
import womansuit1 from "../assets/images/womensuit1.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h4 className="text-center text-xl md:text-3xl font-light text-black-700 mb-12 leading-tight tracking-wide">
          FIND YOUR PERFECT FIT <br />
          BESPOKE TAILORING IN CAMPS BAY CAPE TOWN
        </h4>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Suit */}
          <div className="text-center bg-gray-100 rounded-md shadow-md overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <img
                src={img}
                alt="Tailor measuring a client"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h4 className="text-center text-xl md:text-3xl font-light text-black-700 my-8">
              MEN'S CUSTOM SUITS
            </h4>
          </div>

          {/* Women's Suit */}
          <div className="text-center bg-gray-100 rounded-md shadow-md overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <img
                src={womansuit1}
                alt="Woman in tailored suit"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h4 className="text-center text-xl md:text-3xl font-light text-black-700 my-8">
              WOMAN'S CUSTOM SUITS
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
