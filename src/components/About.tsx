import suitimage from "../assets/images/suitimage.jpg";
import womansuit1 from "../assets/images/womensuit1.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-white py-16">
      <div className="px-4">
        {/* Heading */}
        <h4 className="text-center text-xl md:text-3xl font-light text-black-700 mb-8 leading-tight tracking-wide">
          FIND YOUR PERFECT FIT <br />
          BESPOKE TAILORING IN CAMPS BAY CAPE TOWN
        </h4>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Image Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 rounded-md">

            {/* Men's Suit */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[750px] h-[500px] md:h-[750px] rounded-lg overflow-hidden shadow-md mx-auto">
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
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[750px] h-[500px] md:h-[750px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={womansuit1}
                  alt="Woman in tailored suit"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h4 className="text-center text-xl md:text-2xl font-light text-black-700 my-8 leading-tight">
                WOMAN'S CUSTOM SUITS
              </h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
