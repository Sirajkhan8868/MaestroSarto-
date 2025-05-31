import suitimage from "../assets/images/suitimage.jpg";
import womansuit1 from "../assets/images/womensuit1.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h6 className="text-center text-3xl font-semibold text-gray-800 mb-10 leading-snug">
          FIND YOUR PERFECT FIT <br />
          BESPOKE TAILORING IN DUBAI
        </h6>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8  py-8 rounded-md">

            {/* Left Image */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[750px] h-[500px] md:h-[750px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={suitimage}
                  alt="Tailor measuring a client"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 my-5">Men Custom Suit</h1>
            </div>

            {/* Right Image */}
            <div className="text-center bg-gray-100">
              <div className="relative w-[300px] sm:w-[500px] md:w-[750px] h-[500px] md:h-[750px] rounded-lg overflow-hidden shadow-md mx-auto">
                <img
                  src={womansuit1}
                  alt="Woman in tailored suit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 my-5">Woman Custom Suit</h1>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
