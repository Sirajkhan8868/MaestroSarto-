import suitimage from "../assets/images/suitimage.jpg";
import womansuit1 from "../assets/images/womensuit1.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h4 className="text-center text-xl md:text-3xl font-light text-black-700 mb-8 leading-tight tracking-wide">
          FIND YOUR PERFECT FIT <br />
          BESPOKE TAILORING IN CAMPS BAY CAPE TOWN
        </h4>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Men's Suit */}
          <div className="text-center bg-gray-100 rounded-md shadow-md overflow-hidden">
            <div className="relative w-[300px] sm:w-[500px] md:w-[750px] h-[500px] md:h-[750px] mx-auto overflow-hidden">
              <img
                src={suitimage}
                alt="Tailor measuring a client"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h4 className="text-center text-xl md:text-3xl font-light text-black-700 my-8 leading-tight">
              MEN'S CUSTOM SUITS
            </h4>
          </div>

          {/* Women's Suit */}
          <div className="text-center bg-gray-100 rounded-md shadow-md overflow-hidden">
            <div className="relative w-[300px] sm:w-[500px] md:w-[750px] h-[500px] md:h-[750px] mx-auto overflow-hidden">
              <img
                src={womansuit1}
                alt="Woman in tailored suit"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h4 className="text-center text-xl md:text-3xl font-light text-black-700 my-8 leading-tight">
              WOMAN'S CUSTOM SUITS
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
