import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';
import products from '@/data/productsData'; // Correctly import the data
import usePrefetchModels from '@/hooks/usePrefetchModels'; // Import the new hook

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

  // Collect all model paths to pass to the prefetching hook
  const modelPaths = useMemo(() => {
    return products.map(p => p.modelPath);
  }, []);
  
  // Use the prefetching hook to load models in the background
  usePrefetchModels(modelPaths);

  return (
    <div className="pt-24">
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

      <section className="section-padding bg-showcase-medium">
        <div className="container mx-auto px-4">
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