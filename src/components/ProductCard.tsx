import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  image: string;
  price?: string;
  rating?: number;
  reviews?: number;
  affiliateLink: string;
  tag?: string;
}

const ProductCard = ({ title, image, price, rating, reviews, affiliateLink, tag }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-card-hover transition-smooth h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        {tag && (
          <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
            {tag}
          </Badge>
        )}
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h4 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h4>
        
        {rating && (
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium ml-1">{rating}</span>
            </div>
            {reviews && (
              <span className="text-xs text-muted-foreground">
                ({reviews} avaliações)
              </span>
            )}
          </div>
        )}

        {price && (
          <p className="text-lg font-bold text-primary mb-3">
            {price}
          </p>
        )}

        <div className="mt-auto">
          <Button 
            className="w-full bg-secondary hover:bg-secondary-hover transition-smooth"
            onClick={() => window.open(affiliateLink, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver no Mercado Livre
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
