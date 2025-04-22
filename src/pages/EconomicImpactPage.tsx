
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlobeIcon, TrendingUpIcon, Users, DollarSign, Building, BarChartIcon } from "lucide-react";
import EconomicImpactCard from "@/components/EconomicImpactCard";

const EconomicImpactPage = () => {
  // Sample impact data
  const impactData = [
    {
      title: "Job Creation & Workforce Development",
      description: "This growth initiative will generate new employment opportunities and contribute to skills development in the local workforce.",
      impact: "high" as const,
      metrics: [
        { label: "New Jobs Created", value: "75+", change: 12 },
        { label: "Training Programs", value: "4", change: 2 },
        { label: "Local Hiring Rate", value: "85%", change: 5 },
        { label: "Avg. Wage Impact", value: "+12%", change: 3 },
      ]
    },
    {
      title: "Innovation & Technology Transfer",
      description: "Your business expansion introduces new technologies and innovative practices that benefit the broader economic ecosystem.",
      impact: "medium" as const,
      metrics: [
        { label: "R&D Investment", value: "$350K", change: 15 },
        { label: "Patent Applications", value: "3", change: 1 },
        { label: "Tech Adoption Rate", value: "23%", change: 8 },
        { label: "Industry Partnerships", value: "7", change: 2 },
      ]
    },
    {
      title: "Local Supply Chain Development",
      description: "Strengthening local supplier relationships creates cascading economic benefits throughout the regional economy.",
      impact: "high" as const,
      metrics: [
        { label: "Local Sourcing", value: "62%", change: 18 },
        { label: "Supplier Growth", value: "+28%", change: 28 },
        { label: "Logistics Efficiency", value: "+15%", change: 15 },
        { label: "SME Partnerships", value: "12", change: 4 },
      ]
    },
    {
      title: "Tax Revenue & Public Services",
      description: "Business growth contributes to expanded tax revenue that supports public infrastructure and services.",
      impact: "medium" as const,
      metrics: [
        { label: "Tax Contribution", value: "$1.2M", change: 5 },
        { label: "Infrastructure Fund", value: "$250K", change: 0 },
        { label: "Social Programs", value: "3", change: 1 },
        { label: "Public Service Impact", value: "Moderate", change: 0 },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Economic Impact</h2>
          <p className="text-muted-foreground">
            Assess and optimize your business's contribution to economic growth.
          </p>
        </div>
        <Button className="bg-brand-purple hover:bg-brand-purple-dark w-full md:w-auto">
          <GlobeIcon className="mr-2 h-4 w-4" /> New Impact Assessment
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Employment Impact
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+98</div>
            <p className="text-xs text-muted-foreground">
              Jobs created in local economy
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              GDP Contribution
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+3.5%</div>
            <p className="text-xs text-muted-foreground">
              Local economic growth impact
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Business Ecosystem
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              Local businesses supported
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Innovation Score
            </CardTitle>
            <BarChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.8/10</div>
            <p className="text-xs text-muted-foreground">
              Technology & process innovation
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="w-full">
        <TabsList className="w-full bg-white border rounded-t-lg h-12">
          <TabsTrigger value="reports" className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">
            Impact Reports
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">
            Key Metrics
          </TabsTrigger>
          <TabsTrigger value="goals" className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">
            Impact Goals
          </TabsTrigger>
        </TabsList>
          
        <TabsContent value="reports" className="border rounded-b-lg bg-white p-4">
          <div className="grid gap-6 md:grid-cols-2">
            {impactData.map((impact, idx) => (
              <EconomicImpactCard
                key={idx}
                title={impact.title}
                description={impact.description}
                impact={impact.impact}
                metrics={impact.metrics}
              />
            ))}
          </div>
        </TabsContent>
          
        <TabsContent value="metrics" className="border rounded-b-lg bg-white p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Economic Performance Metrics</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Employment Generation</div>
                    <div className="text-sm text-brand-purple font-medium">Strong Impact</div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Direct Employment</span>
                        <span className="text-gray-500">75 jobs</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-purple" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Indirect Employment</span>
                        <span className="text-gray-500">23 jobs</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-purple" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Employment Quality</span>
                        <span className="text-gray-500">8.5/10</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-purple" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">GDP Contribution</div>
                    <div className="text-sm text-green-600 font-medium">High Impact</div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Direct Value Added</span>
                        <span className="text-gray-500">$2.4M</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Local Multiplier Effect</span>
                        <span className="text-gray-500">2.3x</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Economic Growth Rate</span>
                        <span className="text-gray-500">+3.5%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Innovation & Productivity</div>
                    <div className="text-sm text-amber-600 font-medium">Medium Impact</div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Technology Transfer</span>
                        <span className="text-gray-500">6.8/10</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Productivity Improvement</span>
                        <span className="text-gray-500">+18%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: "56%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>R&D Investment</span>
                        <span className="text-gray-500">$350K</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
          
        <TabsContent value="goals" className="border rounded-b-lg bg-white p-6 text-center">
          <div className="max-w-md mx-auto">
            <GlobeIcon className="h-12 w-12 mx-auto text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-medium">No impact goals set</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Define your economic impact goals to track your business's contribution to the local and national economy.
            </p>
            <Button className="mt-4 bg-brand-purple hover:bg-brand-purple-dark">Set Impact Goals</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EconomicImpactPage;
