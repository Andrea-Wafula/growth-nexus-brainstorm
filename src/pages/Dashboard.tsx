
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, TrendingUpIcon, Users, Briefcase, Globe, ArrowUpRight, LightbulbIcon } from "lucide-react";
import IdeaCard from "@/components/IdeaCard";
import StrategyCard from "@/components/StrategyCard";
import EconomicImpactCard from "@/components/EconomicImpactCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's your business growth framework.
          </p>
        </div>
        <Button className="bg-brand-purple hover:bg-brand-purple-dark w-full md:w-auto">
          <LightbulbIcon className="mr-2 h-4 w-4" /> New Brainstorm Session
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profit Projection
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Growth Rate
            </CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+18.2%</div>
            <p className="text-xs text-muted-foreground">
              +4.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Job Creation
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24</div>
            <p className="text-xs text-muted-foreground">
              +8 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Economic Impact
            </CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">High</div>
            <p className="text-xs text-muted-foreground">
              +3.5% local GDP contribution
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ideas" className="space-y-4">
        <TabsList className="bg-white border">
          <TabsTrigger value="ideas" className="text-sm">Business Ideas</TabsTrigger>
          <TabsTrigger value="strategies" className="text-sm">Growth Strategies</TabsTrigger>
          <TabsTrigger value="impact" className="text-sm">Economic Impact</TabsTrigger>
        </TabsList>
        <TabsContent value="ideas" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <IdeaCard
              title="Sustainable Supply Chain Solutions"
              description="Create a platform that helps businesses implement sustainable practices in their supply chains, leveraging blockchain for transparency and accountability."
              category="Start-up"
              profitPotential={8}
              economicImpact={9}
            />
            <IdeaCard
              title="AI-Powered Customer Service Optimization"
              description="Develop an AI solution that helps businesses improve customer service efficiency while maintaining personal touch, ideal for service-based companies."
              category="Growth"
              profitPotential={9}
              economicImpact={7}
            />
            <IdeaCard
              title="Localized E-commerce Expansion"
              description="Strategic framework for established businesses to expand into new local markets with culturally-relevant e-commerce strategies."
              category="Diversification"
              profitPotential={7}
              economicImpact={8}
            />
          </div>
          <Button variant="outline" className="w-full">View All Ideas</Button>
        </TabsContent>
        <TabsContent value="strategies" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <StrategyCard
              title="Vertical Integration Strategy"
              description="Acquire businesses within your supply chain to reduce costs, improve efficiency, and increase profit margins."
              stage="grow"
              complexity={7}
              timeframe="6-12 months"
              resources={8}
              pros={[
                "Increased control over supply chain",
                "Reduced dependency on suppliers",
                "Cost savings through efficiency",
              ]}
              cons={[
                "High initial capital investment",
                "Requires significant management bandwidth",
                "Potential regulatory challenges",
              ]}
            />
            <StrategyCard
              title="Market Diversification"
              description="Expand into adjacent markets with existing products to increase revenue streams and reduce market-specific risks."
              stage="diversify"
              complexity={6}
              timeframe="3-9 months"
              resources={5}
              pros={[
                "Reduced market concentration risk",
                "Leverages existing capabilities",
                "Potential for rapid growth",
              ]}
              cons={[
                "May dilute focus on core business",
                "Requires market-specific adaptations",
                "Potential brand confusion",
              ]}
            />
          </div>
          <Button variant="outline" className="w-full">View All Strategies</Button>
        </TabsContent>
        <TabsContent value="impact" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <EconomicImpactCard
              title="Job Creation & Workforce Development"
              description="This growth initiative will generate new employment opportunities and contribute to skills development in the local workforce."
              impact="high"
              metrics={[
                { label: "New Jobs Created", value: "75+", change: 12 },
                { label: "Training Programs", value: "4", change: 2 },
                { label: "Local Hiring Rate", value: "85%", change: 5 },
                { label: "Avg. Wage Impact", value: "+12%", change: 3 },
              ]}
            />
            <EconomicImpactCard
              title="Innovation & Technology Transfer"
              description="Your business expansion introduces new technologies and innovative practices that benefit the broader economic ecosystem."
              impact="medium"
              metrics={[
                { label: "R&D Investment", value: "$350K", change: 15 },
                { label: "Patent Applications", value: "3", change: 1 },
                { label: "Tech Adoption Rate", value: "23%", change: 8 },
                { label: "Industry Partnerships", value: "7", change: 2 },
              ]}
            />
          </div>
          <Button variant="outline" className="w-full">View All Impact Reports</Button>
        </TabsContent>
      </Tabs>

      <div className="border rounded-lg bg-white overflow-hidden">
        <div className="bg-muted/50 p-4 flex items-center justify-between">
          <div>
            <h3 className="font-medium">Recent Documents</h3>
            <p className="text-sm text-muted-foreground">Your recently created business documents and plans.</p>
          </div>
          <Button variant="outline" size="sm">Create New</Button>
        </div>
        <div className="divide-y">
          {[
            {
              title: "Q3 Growth Strategy",
              type: "Strategy Document",
              date: "April 18, 2025",
              status: "Draft"
            },
            {
              title: "Market Analysis Report",
              type: "Market Research",
              date: "April 15, 2025",
              status: "Complete"
            },
            {
              title: "Business Expansion Plan",
              type: "Growth Plan",
              date: "April 10, 2025",
              status: "In Review"
            }
          ].map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <Briefcase className="h-10 w-10 p-2 rounded-md bg-brand-purple-light text-brand-purple" />
                <div>
                  <p className="font-medium">{doc.title}</p>
                  <p className="text-sm text-muted-foreground">{doc.type} • {doc.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={doc.status === "Complete" ? "default" : doc.status === "Draft" ? "outline" : "secondary"}>
                  {doc.status}
                </Badge>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
