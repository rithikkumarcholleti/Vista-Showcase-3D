
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/ui/AnimatedText';
import SectionHeading from '@/components/ui/SectionHeading';
import Scene3D from '@/components/3d/Scene3D';
import ProductCard from '@/components/ui/ProductCard';

// Updated featured car products
const featuredProducts = [
  {
    id: '1',
    name: 'Tesla Model S',
    description: 'All-electric luxury sedan with cutting-edge technology',
    price: '₹99,89,990',
    imageSrc: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'cars'
  },
  {
    id: '3',
    name: 'Audi e-tron GT',
    description: 'High-performance electric sports car with stunning design',
    price: '₹90,04,900',
    imageSrc: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'cars'
  },
  {
    id: '7',
    name: 'Porsche Taycan',
    description: 'Precision-engineered electric sports car with iconic styling',
    price: '₹80,86,700',
    imageSrc: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'cars'
  }
];

// Updated features for car showcase
const features = [
  {
    title: 'Interactive 3D Views',
    description: 'Explore vehicles from every angle with our interactive 3D models.',
    icon: '🚗',
  },
  {
    title: 'Virtual Test Drive',
    description: 'Experience how a car looks and feels before visiting a dealership.',
    icon: '🛣️',
  },
  {
    title: 'Detailed Specifications',
    description: 'Get comprehensive information about each vehicle\'s features and capabilities.',
    icon: '📋',
  },
  {
    title: 'Comparison Tools',
    description: 'Compare multiple vehicles side-by-side to find your perfect match.',
    icon: '⚖️',
  },
];

// Updated 3D model URLs for cars
const CAR_MODEL = "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/sedan/model.gltf";
const LUXURY_CAR_MODEL = "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-car/model.gltf";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-showcase-accent1 opacity-10 blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-[250px] h-[250px] rounded-full bg-showcase-accent2 opacity-10 blur-[80px]" />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-36 z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <motion.div 
              className="inline-block rounded-full bg-showcase-medium px-4 py-2 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-showcase-accent1 font-medium mr-2">New</span>
              <span className="text-showcase-muted">Premium Vehicle Showcase</span>
            </motion.div>

            <AnimatedText
              text="Experience Cars In A New Dimension"
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              delay={0.2}
            />
            
            <motion.p 
              className="text-xl text-showcase-muted max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Explore our interactive 3D vehicle showroom where luxury meets performance. Examine every detail from any angle before your purchase.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button 
                size="lg" 
                className="bg-showcase-accent1 hover:bg-showcase-accent1/90 button-glow text-white"
              >
                Explore Vehicles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/5"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-showcase-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-showcase-dark bg-showcase-medium flex items-center justify-center text-xs"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm">
                Join <span className="text-white">2,000+</span> users already exploring
              </span>
            </motion.div>
          </div>

          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Scene3D modelPath={CAR_MODEL} />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-showcase-dark to-transparent pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-showcase-dark">
        <div className="container mx-auto">
          <SectionHeading
            title="Explore Our Virtual Showroom Features"
            subtitle="Discover why our 3D car showcase revolutionizes the way you shop for vehicles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-showcase-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-b from-showcase-dark to-showcase-medium">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading
              title="Featured Vehicles"
              subtitle="Explore our most popular luxury and performance cars."
              alignment="left"
              className="mb-0"
            />
            <Link to="/products" className="hidden md:flex items-center text-showcase-accent1 hover:text-showcase-accent1/80 transition-colors">
              View All Vehicles
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link to="/products">
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                View All Vehicles
                <MoveRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Showcase Section */}
      <section className="section-padding bg-showcase-medium">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-showcase-accent1 font-medium uppercase tracking-wider">3D Technology</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Experience Vehicles Like Never Before</h2>
                <p className="text-showcase-muted mb-8 text-lg">
                  Our interactive 3D models let you explore every detail, rotate cars 360 degrees, and zoom in to see the finest elements before making your purchase decision.
                </p>

                <div className="space-y-4">
                  {[
                    'Rotate and view from any angle',
                    'Zoom in to see fine details',
                    'Interactive feature exploration',
                    'View interior and exterior options',
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-showcase-accent1 flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="mt-8 bg-showcase-accent2 hover:bg-showcase-accent2/90 text-black font-medium button-glow"
                >
                  Try the 3D Viewer
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-black/30 rounded-2xl p-4 h-[500px]"
            >
              <Scene3D modelPath={LUXURY_CAR_MODEL} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-showcase-accent1">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Experience the Future of Car Shopping?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have revolutionized their vehicle shopping experience with our 3D virtual showroom.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-showcase-accent1 hover:bg-white/90"
              >
                Book a Test Drive
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
