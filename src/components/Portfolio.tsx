
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioCategories = [
  {
    id: "suits",
    label: "Suits",
    items: [
      {
        id: 1,
        title: "Business Suit",
        description: "Classic navy business suit with peak lapels",
        imageSrc: "https://images.unsplash.com/photo-1594938298623-c8506befca82?auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        title: "Wedding Tuxedo",
        description: "Black tie tuxedo with satin lapels",
        imageSrc: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80",
      },
      {
        id: 3,
        title: "Summer Linen",
        description: "Light beige linen suit for warm weather",
        imageSrc: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80",
      },
      {
        id: 4,
        title: "Charcoal Three-Piece",
        description: "Versatile charcoal three-piece suit",
        imageSrc: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "shirts",
    label: "Shirts",
    items: [
      {
        id: 5,
        title: "Business White",
        description: "Crisp white shirt with French cuffs",
        imageSrc: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80",
      },
      {
        id: 6,
        title: "Casual Oxford",
        description: "Light blue oxford button-down shirt",
        imageSrc: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80",
      },
      {
        id: 7,
        title: "Evening Shirt",
        description: "Formal pleated front shirt for black tie events",
        imageSrc: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80",
      },
      {
        id: 8,
        title: "Patterned Shirt",
        description: "Subtle check pattern business shirt",
        imageSrc: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "accessories",
    label: "Accessories",
    items: [
      {
        id: 9,
        title: "Silk Ties",
        description: "Collection of premium silk ties",
        imageSrc: "https://images.unsplash.com/photo-1598812761095-207fa371baff?auto=format&fit=crop&q=80",
      },
      {
        id: 10,
        title: "Pocket Squares",
        description: "Handcrafted pocket squares in various patterns",
        imageSrc: "https://images.unsplash.com/photo-1629736048693-6bc25970ac36?auto=format&fit=crop&q=80",
      },
      {
        id: 11,
        title: "Cufflinks",
        description: "Sterling silver and gold-plated cufflinks",
        imageSrc: "https://images.unsplash.com/photo-1593976890064-c87053c3626e?auto=format&fit=crop&q=80",
      },
      {
        id: 12,
        title: "Belts",
        description: "Full-grain leather belts with brass buckles",
        imageSrc: "https://images.unsplash.com/photo-1605078210579-20a75952bd1e?auto=format&fit=crop&q=80",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our <span className="text-tailor-gold">Portfolio</span></h2>
          <p className="section-subtitle">
            Browse through our collection of handcrafted garments. Each piece represents our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        <Tabs defaultValue="suits" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-tailor-light">
              {portfolioCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-3 data-[state=active]:bg-tailor-dark data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {portfolioCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.imageSrc} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-center p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-serif text-xl font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
