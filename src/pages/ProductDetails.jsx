import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Scene3D from "@/components/3d/Scene3D";
import { ArrowLeft } from 'lucide-react';

// You can move this to a separate data file if needed
const products = [
  {
    id: '1',
    name: 'Tesla Model S',
    description: 'All-electric luxury sedan with cutting-edge technology',
    price: '₹99,89,990',
    modelPath: '/models/tesla.glb',
  },
  {
    id: '2',
    name: 'Ducati Panigale V4',
    description: 'High-performance superbike with racing DNA',
    price: '₹12,23,295',
    modelPath: '/models/ducati.glb',
  },
  {
    id: '3',
    name: 'Audi e-tron GT',
    description: 'High-performance electric sports car with stunning design',
    price: '₹90,04,900',
    modelPath: '/models/audi.glb',
  },
  {
    id: '4',
    name: 'Kawasaki Ninja ZX-10R',
    description: 'Track-focused sportbike with advanced electronics',
    price: '₹11,17,399',
    modelPath: '/models/vespa.glb',
  },
  {
    id: '5',
    name: 'BMW M4 Competition',
    description: 'High-performance luxury coupe with twin-turbo power',
    price: '₹70,74,700',
    modelPath: '/models/generic_sport_coupe_car.glb',
  },
  {
    id: '6',
    name: 'Yamaha YZF-R1',
    description: 'Legendary superbike with MotoGP-derived technology',
    price: '₹10,17,599',
    modelPath: '/models/retro_car.glb',
  },
  {
    id: '7',
    name: 'Porsche Taycan',
    description: 'Precision-engineered electric sports car with iconic styling',
    price: '₹80,86,700',
   modelPath: '/models/source.glb',
  },
  {
    id: '8',
    name: 'Harley-Davidson Pan America',
    description: 'Adventure touring motorcycle built for exploration',
    price: '₹10,17,319',
    modelPath: '/models/modern_cartoon_sports_car.glb',
  },
  // Add remaining products with corresponding GLB paths...
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-showcase-dark px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
        <p className="text-showcase-muted mb-6">We couldn't find the product you're looking for.</p>
        <Button onClick={() => navigate('/')} className="bg-showcase-accent1">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-showcase-dark text-white pt-20 pb-12 px-4 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <Button onClick={() => navigate(-1)} variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Button>

        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-lg text-showcase-muted mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-showcase-accent1 mb-6">{product.price}</p>

        <Scene3D modelPath={product.modelPath} autoRotate backgroundColor="#111" />
      </motion.div>
    </div>
  );
};

export default ProductDetails;
