"use client";

export default function FlipCardsSection() {
  const cards = [
    {
      title: "CONVENIENCE",
      description:
        "We give convenience for our customers to get their custom clothing done without stepping out from home.",
      image: "/convenience.webp?height=300&width=400&text=Convenience",
    },
    {
      title: "DESIGN YOUR OWN",
      description:
        "You can decide everything in detail on how you would like to finalize your perfect custom clothing",
      image: "/design.webp?height=300&width=400&text=Design+Your+Own",
    },
    {
      title: "STYLIST ADVISE",
      description:
        "Our expert stylist will be happy to discuss your requirements in detail and recommend the best style, fabrics.",
      image: "/stylist.webp?height=300&width=400&text=Stylist+Advise",
    },
    {
      title: "QUALITY FABRICS",
      description:
        "We can help you find the perfect fabric, We use for your clothing will ensure the comfort of wear and long life.",
      image: "/quality.webp?height=300&width=400&text=Quality+Fabrics",
    },
    {
      title: "PERSONAL TAILOR",
      description:
        "Your personal master tailor knows how to get the perfect cut for your clothes, which makes it perfect for you.",
      image: "/personal.webp?height=300&width=400&text=Personal+Tailor",
    },
    {
      title: "PERFECT FIT",
      description: "Never underestimate the power of a well tailored suit.",
      image: "/perfect.webp?height=300&width=400&text=Perfect+Fit",
    },
  ];

  return (
    <>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-inner {
          transition: transform 0.7s ease-in-out;
        }
        .flip-card {
          transform-style: preserve-3d;
        }
      `}</style>

      <section id="flip-cards-section" className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
              WHY Maestro Sarto
            </h1>
            <div className="w-24 h-[2px] bg-gray-400 mx-auto mt-4 rounded"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group perspective-1000 h-64 md:h-72 lg:h-80 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-lg">

                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                      <h3 className="text-white text-2xl font-semibold tracking-wide text-center px-2">{card.title}</h3>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
