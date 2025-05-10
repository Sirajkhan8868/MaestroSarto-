
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message. We'll be in touch soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section bg-tailor-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Contact <span className="text-tailor-gold">Us</span></h2>
            <p className="text-tailor-gray mb-8">
              Whether you're ready to book an appointment, have questions about our services, or want to discuss a special project, we're here to help.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-tailor-dark text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1">Phone</h3>
                  <p className="text-tailor-gray">+27 21 123 4567</p>
                  <p className="text-tailor-gray">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-tailor-dark text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1">Email</h3>
                  <p className="text-tailor-gray">info@tailorme.co.za</p>
                  <p className="text-tailor-gray">We aim to respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-tailor-dark text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1">Location</h3>
                  <p className="text-tailor-gray">123 Main Street, Cape Town</p>
                  <p className="text-tailor-gray">South Africa, 8001</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-serif text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-tailor-dark text-white rounded-full flex items-center justify-center hover:bg-tailor-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-tailor-dark text-white rounded-full flex items-center justify-center hover:bg-tailor-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-tailor-dark text-white rounded-full flex items-center justify-center hover:bg-tailor-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-medium mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required 
                    className="w-full border-gray-300 focus:border-tailor-gold focus:ring-tailor-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required 
                    className="w-full border-gray-300 focus:border-tailor-gold focus:ring-tailor-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 xx xxx xxxx" 
                    className="w-full border-gray-300 focus:border-tailor-gold focus:ring-tailor-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="How can we help you?" 
                    required 
                    className="w-full border-gray-300 focus:border-tailor-gold focus:ring-tailor-gold"
                  />
                </div>
                <Button type="submit" className="w-full bg-tailor-dark hover:bg-black text-white py-6">
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
