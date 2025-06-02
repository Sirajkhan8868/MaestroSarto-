import { Button } from "@/components/ui/button";
import Background from "../assets/videos/Background.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-tailor-dark overflow-hidden"
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
          <source src={Background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-white relative z-20">
        <div className="max-w-3xl animate-fade-in mt-8">
          <h1 className="text-5xl mb-2">Maestro Sarto</h1>
          <p className="text-1xl md:text-1xl font-light text-left text-white-100 mb-6 tracking-[0.1rem]">
            <span className="text-tailor-white">
              Offers bespoke, made-to-measure, and ready-to-wear garments crafted with precision tailoring and exquisite fabrics. Our master artisans ensure an impeccable fit and personalized details, elevating your presence with timeless sophistication.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-6">
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

      {/* Launching Soon Badge with Glow */}
      <div className="absolute bottom-10 right-4 z-20 bg-black/70 text-white px-4 py-2 text-sm rounded-lg shadow-md backdrop-blur-sm animate-glow">
        LAUNCHING SOON
      </div>
    </section>
  );
};

export default Hero;
