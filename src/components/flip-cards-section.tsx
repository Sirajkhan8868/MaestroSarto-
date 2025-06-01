"use client"

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
      description: "You can decide everything in detail on how you would like to finalize your perfect custom clothing",
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
  ]

  return (
    <>
      {/* Custom CSS for flip effect */}
      <style >{`
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
        
        /* Additional smooth animation */
        .flip-card-inner {
          transition: transform 0.7s ease-in-out;
        }
        
        /* Ensure proper 3D rendering */
        .flip-card {
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <h1 className="text-center mb-4 text-sm">WHY HOUSE OF TAILORS
</h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="group perspective-1000 h-80">
                <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gray-200 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-6">
                      <div className="text-center">
                        <h3 className="text-white text-2xl font-bold tracking-wide mb-2">{card.title}</h3>
                        <div className="w-12 h-1 bg-white mx-auto rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
