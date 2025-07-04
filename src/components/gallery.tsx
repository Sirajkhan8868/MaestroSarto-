import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import suit1 from "../assets/images/suit1.webp";

const galleryCategories = [
  {
    id: "suits",
    label: "Suits",
    items: [
      {
        id: 1,
        title: "Summer Linen",
        description: "Custom gray plaid blazer with pinstriped dress shirt and solid navy tie",
        imageSrc: "https://images.unsplash.com/photo-1594938350684-4c251b5030d1?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Versatile Charcoal Three-Piece Suit",
        description: "Versatile charcoal three-piece suit",
        imageSrc: "https://images.unsplash.com/photo-1593030089683-a9841767a610?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
       {
        id: 3,
        title: "Sharp Blue Three-Piece Suit",
        description: "Custom blue blazer, pinstripe slacks, and a striking red tie.",
        imageSrc: "https://images.unsplash.com/photo-1592878863518-0357779ebc6a?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        title: "Bold Blue Suit Look",
        description: "Custom mid-blue suit with double-breasted waistcoat and yellow tie.",
        imageSrc: "https://images.unsplash.com/photo-1593030821647-0c9c4a845da3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
     
    ],
  },
  {
    id: "shirts",
    label: "Shirts",
    items: [
        {
        id: 1,
        title: "Business Suit",
        description: "Classic navy business suit with peak lapels",
        imageSrc: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&q=80",
      },
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
      description: "Elegant silk ties in various colors and patterns, perfect for formal occasions.",
      imageSrc: "https://images.unsplash.com/photo-1577593641419-f2522bec16e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      title: "Pocket Squares",
      description: "Handcrafted pocket squares with intricate designs to complement your style.",
      imageSrc: "https://images.unsplash.com/photo-1629736048693-6bc25970ac36?auto=format&fit=crop&q=80",
    },
    {
      id: 11,
      title: "Cufflinks",
      description: "Sophisticated sterling silver and gold-plated cufflinks for a polished look.",
      imageSrc: "https://images.unsplash.com/photo-1582327530547-e8037399bdbf?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      title: "Belts",
      description: "Durable full-grain leather belts with classic brass buckles for everyday wear.",
      imageSrc: "https://images.unsplash.com/photo-1627821644229-9681183f045a?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
}
];

const Gallery = () => {
  return (
    <section id="gallery" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Our <span className="text-tailor-black">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Browse through our collection of handcrafted garments. Each piece represents our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        <Tabs defaultValue="suits" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-tailor-light">
              {galleryCategories.map((category) => (
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

          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  >
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

export default Gallery;
