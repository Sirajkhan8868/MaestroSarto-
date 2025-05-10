
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    title: "Bespoke Suits",
    description: "Completely custom suits crafted to your exact measurements with your choice of fabric, style, and details.",
    imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
  },
  {
    title: "Made-to-Measure Shirts",
    description: "Premium shirts tailored for the perfect fit with a wide selection of fabrics, colors, and customization options.",
    imageSrc: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80",
  },
  {
    title: "Wedding Attire",
    description: "Special occasion suits and tuxedos that ensure you look your absolute best on your important day.",
    imageSrc: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&q=80",
  },
  {
    title: "Alterations & Repairs",
    description: "Expert alterations and repairs to existing garments to ensure the perfect fit and extend their life.",
    imageSrc: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80",
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-tailor-light">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our <span className="text-tailor-gold">Services</span></h2>
          <p className="section-subtitle">
            We offer a wide range of tailoring services to meet your needs, from bespoke suits to alterations.
            Each service is delivered with our commitment to quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.imageSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-xl font-medium">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-tailor-gray text-sm">{service.description}</p>
                <a href="#contact" className="mt-4 inline-block text-tailor-gold text-sm font-medium hover:underline">
                  Learn more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
