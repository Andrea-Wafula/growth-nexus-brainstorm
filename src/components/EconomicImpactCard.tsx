
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EconomicImpactCardProps {
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  metrics: {
    label: string;
    value: string;
    change: number;
  }[];
}

const EconomicImpactCard = ({
  title,
  description,
  impact,
  metrics
}: EconomicImpactCardProps) => {
  // Get impact styles
  const getImpactStyle = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-green-100 border-green-300 text-green-800";
      case "medium":
        return "bg-amber-100 border-amber-300 text-amber-800";
      case "low":
        return "bg-red-100 border-red-300 text-red-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  // Get change indicator styles
  const getChangeStyle = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-500";
  };

  // Get change icon
  const getChangeIcon = (change: number) => {
    if (change > 0) return "↑";
    if (change < 0) return "↓";
    return "→";
  };

  return (
    <Card className={`border-l-4 ${impact === "high" ? "border-l-green-500" : impact === "medium" ? "border-l-amber-500" : "border-l-red-500"} overflow-hidden transition-all hover:shadow-md`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge className={`${getImpactStyle(impact)} mb-2`}>
              {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
            </Badge>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {description}
        </CardDescription>
        
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-3 rounded-md border">
              <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-bold">{metric.value}</div>
                <div className={`text-xs font-medium flex items-center ${getChangeStyle(metric.change)}`}>
                  {getChangeIcon(metric.change)} {Math.abs(metric.change)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EconomicImpactCard;
