import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Scene3D from "@/components/3d/Scene3D";
import { ArrowLeft } from 'lucide-react';
import products from '@/data/productsData'; // Correctly import the data

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

        <Scene3D key={product.modelPath} modelPath={product.modelPath} autoRotate backgroundColor="#111" />

      </motion.div>
    </div>
  );
};

export default ProductDetails;