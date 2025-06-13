import { Button } from "@/components/ui/button";
import Tailor from "../assets/videos/Tailor.mp4";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-tailor-dark overflow-hidden pt-[4.5rem]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.5]"
        >
<source src={Tailor} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-4 text-white relative z-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl mb-4 font-serif">Maestro Sarto</h1>
         <p className="text-lg md:text-xl font-light mb-6 tracking-[0.1rem] leading-relaxed text-tailor-white text-center">
  Welcome to our boutique tailoring studio in Camps Bay, Cape Town
  where ocean views meet timeless style. We specialize in bespoke and
  made-to-measure suits, expertly crafted to reflect your individuality.
  From precision alterations to unique custom pieces, every garment is
  tailored to perfection because you deserve nothing less than excellence.
</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center">
            <Button className="bg-transparent border border-white hover:bg-gray-800 text-white font-medium px-8 py-6 transition-colors duration-300">
              EXPLORE OUR SERVICES
            </Button>
          </div>
        </div>
      </div>

      {/* Discover More */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <a
          href="#about"
          className="text-white flex flex-col items-center hover:text-tailor-gold transition-colors"
        >
          <span className="mb-2 text-sm">DISCOVER MORE</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>

      {/* Moving Launching Soon Badge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <div className="whitespace-nowrap animate-marquee flex items-center">
          <span className="inline-block bg-black/70 text-white px-4 py-2 text-sm rounded-lg shadow-lg shadow-white/20 backdrop-blur-sm mx-2 animate-glow">
            LAUNCHING SOON
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
