
const testimonials = [
  {
    name: "David Mitchell",
    title: "CEO, Mitchell & Co.",
    quote: "The attention to detail and quality of craftsmanship at Tailor Me is unmatched. My suits not only fit perfectly but make me feel confident in every business meeting.",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Thomas",
    title: "Attorney",
    quote: "I've been a client for over 5 years, and Tailor Me consistently exceeds my expectations. The personal service and expert advice on fabric and style selection is invaluable.",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "James Wilson",
    title: "Finance Director",
    quote: "From my wedding tuxedo to my everyday business attire, Tailor Me ensures I always look my best. Their craftsmanship stands the test of time.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-tailor-dark text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Client <span className="text-tailor-gold">Testimonials</span></h2>
          <p className="text-gray-300 text-lg">
            Don't just take our word for it. Here's what our clients have to say about their experience with Tailor Me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black/20 p-8 rounded-lg hover:bg-black/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.imageSrc} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium">{testimonial.name}</h3>
                  <p className="text-tailor-gold text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-4 text-tailor-gold">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
