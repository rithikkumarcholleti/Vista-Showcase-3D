
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

// Updated products data with cars and bikes
const products = [
  {
    id: '1',
    name: 'Tesla Model S',
    description: 'All-electric luxury sedan with cutting-edge technology',
    price: '₹99,89,990',
    imageSrc: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'cars'
  },
  {
    id: '2',
    name: 'Ducati Panigale V4',
    description: 'High-performance superbike with racing DNA',
    price: '₹12,23,295',
    imageSrc: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'bikes'
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
    id: '4',
    name: 'Kawasaki Ninja ZX-10R',
    description: 'Track-focused sportbike with advanced electronics',
    price: '₹11,17,399',
    imageSrc: 'https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'bikes'
  },
  {
    id: '5',
    name: 'BMW M4 Competition',
    description: 'High-performance luxury coupe with twin-turbo power',
    price: '₹70,74,700',
    imageSrc: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'cars'
  },
  {
    id: '6',
    name: 'Yamaha YZF-R1',
    description: 'Legendary superbike with MotoGP-derived technology',
    price: '₹10,17,599',
    imageSrc: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'bikes'
  },
  {
    id: '7',
    name: 'Porsche Taycan',
    description: 'Precision-engineered electric sports car with iconic styling',
    price: '₹80,86,700',
    imageSrc: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'cars'
  },
  {
    id: '8',
    name: 'Harley-Davidson Pan America',
    description: 'Adventure touring motorcycle built for exploration',
    price: '₹10,17,319',
    imageSrc: 'https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'bikes'
  },
];

// Updated categories for vehicles
const categories = [
  { id: 'all', name: 'All Vehicles' },
  { id: 'cars', name: 'Cars' },
  { id: 'bikes', name: 'Motorcycles' },
  { id: 'electric', name: 'Electric Vehicles' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'sports', name: 'Sports' },
  { id: 'off-road', name: 'Off-Road' },
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-showcase-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text="Discover Our Vehicles"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
            />
            <p className="text-showcase-muted text-lg text-center max-w-2xl mx-auto">
              Browse our collection of premium cars and motorcycles, featuring interactive 3D previews and detailed specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List Section */}
      <section className="section-padding bg-showcase-medium">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === 'all' ? 'default' : 'outline'}
                className={category.id === 'all' ? 'bg-showcase-accent1' : 'border-white/10 hover:bg-white/5'}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/10 hover:bg-white/5"
            >
              Load More Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding bg-showcase-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Collections"
            subtitle="Explore our curated selection of premium vehicles."
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Cars" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">Luxury Cars</h3>
                <p className="text-showcase-muted mb-4">Experience unparalleled comfort and performance</p>
                <Button className="w-fit bg-showcase-accent1 hover:bg-showcase-accent1/90">
                  Explore Collection
                </Button>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Performance Motorcycles" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">Performance Motorcycles</h3>
                <p className="text-showcase-muted mb-4">Feel the thrill of cutting-edge two-wheel engineering</p>
                <Button className="w-fit bg-showcase-accent1 hover:bg-showcase-accent1/90">
                  Explore Collection
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
