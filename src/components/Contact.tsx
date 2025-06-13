import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  return (
    <section id="contact" className="section bg-tailor-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="section-title">
              Contact <span className="text-tailor-black">Us</span>
            </h2>
            <p className="text-tailor-gray mb-8">
              Whether you're ready to book an appointment, have questions about our services, or want to discuss a special project, we're here to help.
            </p>

            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-tailor-dark text-white rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1">Phone</h3>
                  <p className="text-tailor-gray">074 577 4777</p>
                  <p className="text-tailor-gray">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-tailor-dark text-white rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1">Email</h3>
                  <p className="text-tailor-gray">Maestrosarto79@gmail.com</p>
                  <p className="text-tailor-gray">We aim to respond within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-tailor-dark text-white rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1">Location</h3>
                  <p className="text-tailor-gray">Promenade Mall, Camps Bay, Cape Town</p>
                  <p className="text-tailor-gray">South Africa.</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-serif text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/19VwMyXi5G/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tailor-dark text-white rounded-full flex items-center justify-center hover:bg-tailor-gold transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/maestro_sarto?igsh=cG1lYjB4cjNoZ292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tailor-dark text-white rounded-full flex items-center justify-center hover:bg-tailor-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Google Map Embed */}
          <div className="bg-white p-0 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Maestro Sarto Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.119519369356!2d18.37324301541617!3d-33.95198022736956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6786d158b315%3A0x8df2ea2e6767311b!2sThe%20Promenade%20Camps%20Bay!5e0!3m2!1sen!2sza!4v1718097500000!5m2!1sen!2sza"
              className="w-full h-[500px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
