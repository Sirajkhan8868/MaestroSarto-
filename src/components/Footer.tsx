
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tailor-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="font-serif text-3xl font-bold tracking-tight">
              Maestro<span className="text-tailor-black"> Sarto</span>
            </a>
            <p className="text-gray-400 mt-4">
              Premium bespoke tailoring for the modern gentleman. Crafting excellence since 2005.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-tailor-black transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-tailor-black transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-tailor-black transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-tailor-black transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-tailor-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-tailor-black transition-colors">Bespoke Suits</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-tailor-black transition-colors">Made-to-Measure Shirts</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-tailor-black transition-colors">Wedding Attire</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-tailor-black transition-colors">Alterations & Repairs</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-tailor-black transition-colors">Style Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Business Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
              <li className="pt-2">
                <strong className="text-white">Email:</strong> Maestrosarto79@gmail.com
              </li>
              <li>
                <strong className="text-white">Phone:</strong> 074 577 4777
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Maestro Sarto. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-tailor-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-tailor-black transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-tailor-black transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
