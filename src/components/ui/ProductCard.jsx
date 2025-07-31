import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const ProductCard = ({
  id,
  name,
  description,
  price,
  imageSrc,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={cn(
        "overflow-hidden border-white/10 bg-showcase-medium h-full transition-all duration-300",
        isHovered ? "shadow-lg shadow-showcase-accent1/20 -translate-y-1" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden bg-black">
        <img 
          src={imageSrc} 
          alt={name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{name}</CardTitle>
          <span className="text-showcase-accent1 font-semibold">{price}</span>
        </div>
        <CardDescription className="text-showcase-muted">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`/products/${id}`} className="w-full">
          <Button 
            variant="ghost" 
            className={cn(
              "w-full border border-white/10 gap-2 transition-all",
              isHovered ? "bg-showcase-accent1 text-white border-showcase-accent1" : ""
            )}
          >
            View Details
            <ArrowRight size={16} className={cn(
              "transition-transform",
              isHovered ? "transform translate-x-1" : ""
            )} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
