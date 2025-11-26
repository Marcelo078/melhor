import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tag?: string;
}

const CategoryCard = ({ title, description, image, link, tag }: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-card-hover transition-smooth cursor-pointer">
      <Link to={link}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
          {tag && (
            <div className="absolute top-4 left-4">
              <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
                {tag}
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <Button variant="ghost" className="group/button p-0 h-auto font-semibold text-primary">
            Ver ofertas
            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CategoryCard;
