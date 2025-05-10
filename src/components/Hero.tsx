
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1519092976802-6ae56fc7636d?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 py-20 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Bespoke Tailoring <br /> 
            <span className="text-tailor-gold">For The Modern Gentleman</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
            Handcrafted suits and garments tailored to your unique measurements and style preferences. Experience the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-tailor-gold hover:bg-amber-600 text-black font-medium px-8 py-6">
              BOOK A CONSULTATION
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
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
          <span className="mb-2 text-sm">SCROLL DOWN</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
