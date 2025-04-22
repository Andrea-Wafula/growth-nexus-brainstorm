
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckIcon, XIcon, ArrowRightIcon } from "lucide-react";

interface StrategyCardProps {
  title: string;
  description: string;
  stage: "start" | "grow" | "diversify";
  complexity: number;
  timeframe: string;
  resources: number;
  pros: string[];
  cons: string[];
}

const StrategyCard = ({
  title,
  description,
  stage,
  complexity,
  timeframe,
  resources,
  pros,
  cons
}: StrategyCardProps) => {
  // Get background color based on business stage
  const getStageBg = (stage: string) => {
    switch (stage) {
      case "start":
        return "bg-blue-100 text-blue-800";
      case "grow":
        return "bg-green-100 text-green-800";
      case "diversify":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Format stage text
  const formatStage = (stage: string) => {
    return stage.charAt(0).toUpperCase() + stage.slice(1);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <div className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${getStageBg(stage)}`}>
              {formatStage(stage)}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {description}
        </CardDescription>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Complexity</span>
            <div className="w-2/3">
              <Progress value={complexity * 10} className="h-2" />
            </div>
            <span className="text-sm font-medium">{complexity}/10</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Resources</span>
            <div className="w-2/3">
              <Progress value={resources * 10} className="h-2" />
            </div>
            <span className="text-sm font-medium">{resources}/10</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Timeframe</span>
            <span className="text-sm font-medium">{timeframe}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Pros</h4>
            <ul className="space-y-1">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-xs">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Cons</h4>
            <ul className="space-y-1">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start gap-2">
                  <XIcon className="h-4 w-4 text-red-600 mt-0.5" />
                  <span className="text-xs">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3">
        <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark">
          <span>Explore Strategy</span>
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StrategyCard;
