
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-tailor-dark"
    >
      <div className="container mx-auto px-4 py-20 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Exquisite Tailoring <br /> 
            <span className="text-tailor-gold">For The Distinguished Gentleman</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
            Meticulously handcrafted suits and garments tailored to your exact measurements and personal style. Experience Italian craftsmanship and the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-6">
              EXPLORE OUR SERVICES
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
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
