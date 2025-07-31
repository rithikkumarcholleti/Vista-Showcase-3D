
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-showcase-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text="Get In Touch"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
            />
            <p className="text-showcase-muted text-lg max-w-3xl mx-auto">
              Have questions about our virtual showroom technology? Need a demo? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-showcase-medium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Send Us a Message</h2>
              <p className="text-showcase-muted">
                Fill out the form and our team will get back to you within 24 hours. We're eager to hear about your project and how we can help bring your products to life in 3D.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    icon: <Mail className="h-6 w-6" />, 
                    title: 'Email Us', 
                    content: 'info@vistashowcase.com' 
                  },
                  { 
                    icon: <Phone className="h-6 w-6" />, 
                    title: 'Call Us', 
                    content: '+91 40 2345 6789' 
                  },
                  { 
                    icon: <MapPin className="h-6 w-6" />, 
                    title: 'Visit Us', 
                    content: 'Vista Showcase Tech Hub, HITEC City, Hyderabad, Telangana 500081, India' 
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-showcase-accent1/20 p-3 rounded-full text-showcase-accent1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-showcase-muted">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-white/10 bg-showcase-dark">
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input 
                        id="first-name" 
                        placeholder="Enter your first name" 
                        className="bg-showcase-medium border-white/10 focus:border-showcase-accent1"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input 
                        id="last-name" 
                        placeholder="Enter your last name" 
                        className="bg-showcase-medium border-white/10 focus:border-showcase-accent1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-showcase-medium border-white/10 focus:border-showcase-accent1"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="bg-showcase-medium border-white/10 focus:border-showcase-accent1"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your project..." 
                      className="min-h-[120px] bg-showcase-medium border-white/10 focus:border-showcase-accent1"
                    />
                  </div>
                  <Button 
                    className="w-full bg-showcase-accent1 hover:bg-showcase-accent1/90 button-glow"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-showcase-dark relative">
        <div className="absolute inset-0 z-0">
          {/* This would typically be a map, but we'll use a placeholder image */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Map of Hyderabad City" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Map overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-showcase-dark to-transparent"></div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <Button 
            size="lg" 
            className="bg-showcase-accent1 hover:bg-showcase-accent1/90 button-glow"
          >
            Get Directions
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-showcase-medium">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How does your 3D product showcase work?",
                answer: "Our platform uses advanced 3D modeling and web technologies to create interactive, photorealistic product representations that users can rotate, zoom, and explore from any angle."
              },
              {
                question: "Can I integrate this into my existing e-commerce site?",
                answer: "Absolutely! We offer seamless integration with major e-commerce platforms including Shopify, WooCommerce, and Magento through our API and custom plugins."
              },
              {
                question: "How long does it take to create a 3D model of my product?",
                answer: "Typically, we can create a high-quality 3D model within 5-7 business days, depending on the complexity of the product and your requirements."
              },
              {
                question: "Do you offer custom solutions for businesses?",
                answer: "Yes, we provide tailored solutions for businesses of all sizes. Our team can work with you to develop a custom implementation that meets your specific needs and brand requirements."
              },
              {
                question: "What file formats do you accept for creating 3D models?",
                answer: "We can work with most common formats including CAD files, photos, technical drawings, or even physical products that we can scan and digitize."
              },
              {
                question: "Is there a limit to how many products I can showcase?",
                answer: "No, our platform is designed to scale with your needs. Whether you have 10 products or 10,000, we can accommodate your full catalog."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="glass-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-showcase-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
