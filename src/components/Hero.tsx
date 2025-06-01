import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-tailor-dark overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <iframe
          src="https://www.youtube.com/embed/jYDU_zoXKtk?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=jYDU_zoXKtk"
          title="Background Video"
          className="w-full h-full scale-[1.5]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-white relative z-20">
        <div className="max-w-3xl animate-fade-in mt-8">
          <h1 className="text-5xl mb-2">Maestro Sarto</h1>
          <p className="text-1xl md:text-1xl font-light text-left text-white-100 mb-6 tracking-[0.1rem]">
            <span className="text-tailor-white "> Offers bespoke, made-to-measure, and ready-to-wear garments crafted with precision tailoring and exquisite fabrics. Our master artisans ensure an impeccable fit and personalized details, elevating your presence with timeless sophistication.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-6">
              EXPLORE OUR SERVICES
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <a 
          href="#about" 
          className="text-white flex flex-col items-center hover:text-tailor-gold transition-colors"
        >
          <span className="mb-2 text-sm">DISCOVER MORE</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
