
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">About <span className="text-tailor-gold">Tailor Me</span></h2>
            <p className="text-tailor-gray mb-6">
              Founded in 2005, Tailor Me has built a reputation for exceptional craftsmanship and attention to detail. 
              Our master tailors bring decades of experience to create garments that perfectly match your body shape and style preferences.
            </p>
            <p className="text-tailor-gray mb-6">
              We believe that every gentleman deserves a perfectly fitted suit that enhances confidence and makes a statement. 
              Our bespoke approach ensures that each garment is as unique as the individual wearing it.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-serif text-4xl font-bold text-tailor-gold mb-2">18+</h3>
                <p className="text-sm text-tailor-gray">Years of Experience</p>
              </div>
              <div>
                <h3 className="font-serif text-4xl font-bold text-tailor-gold mb-2">5,000+</h3>
                <p className="text-sm text-tailor-gray">Satisfied Clients</p>
              </div>
              <div>
                <h3 className="font-serif text-4xl font-bold text-tailor-gold mb-2">12</h3>
                <p className="text-sm text-tailor-gray">Master Tailors</p>
              </div>
              <div>
                <h3 className="font-serif text-4xl font-bold text-tailor-gold mb-2">100%</h3>
                <p className="text-sm text-tailor-gray">Satisfaction Guarantee</p>
              </div>
            </div>
            <Button className="bg-tailor-dark hover:bg-black text-white px-8 py-6">
              LEARN MORE
            </Button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80" 
                alt="Tailor measuring a client" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute w-full h-full bg-tailor-gold/20 rounded-lg -z-0 top-6 left-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
