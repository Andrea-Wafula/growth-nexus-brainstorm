
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookmarkIcon, ThumbsUpIcon, MessageSquareIcon, ShareIcon } from "lucide-react";

interface IdeaCardProps {
  title: string;
  description: string;
  category: string;
  profitPotential: number;
  economicImpact: number;
}

const IdeaCard = ({ 
  title, 
  description, 
  category, 
  profitPotential, 
  economicImpact 
}: IdeaCardProps) => {
  
  // Function to determine color based on rating
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "text-green-600";
    if (rating >= 5) return "text-amber-600";
    return "text-red-600";
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge className="bg-brand-purple-light text-brand-purple-dark mb-2">
              {category}
            </Badge>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <BookmarkIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-md">
            <span className="text-xs text-gray-500">Profit Potential</span>
            <span className={`text-lg font-bold ${getRatingColor(profitPotential)}`}>
              {profitPotential}/10
            </span>
          </div>
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-md">
            <span className="text-xs text-gray-500">Economic Impact</span>
            <span className={`text-lg font-bold ${getRatingColor(economicImpact)}`}>
              {economicImpact}/10
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between">
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ThumbsUpIcon className="h-4 w-4 mr-1" />
            <span className="text-xs">24</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <MessageSquareIcon className="h-4 w-4 mr-1" />
            <span className="text-xs">8</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="h-8">
          <ShareIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;
