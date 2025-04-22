
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUpIcon, SearchIcon, PlusIcon } from "lucide-react";
import StrategyCard from "@/components/StrategyCard";

const StrategyPage = () => {
  // Sample strategies data
  const startStrategies = [
    {
      title: "Lean Startup Methodology",
      description: "Implement a build-measure-learn approach to minimize initial investment while maximizing market learning and adaptation.",
      stage: "start",
      complexity: 5,
      timeframe: "2-4 months",
      resources: 4,
      pros: [
        "Low initial capital requirement",
        "Faster market validation",
        "Reduces risk of major failure"
      ],
      cons: [
        "Requires rapid iteration capacity",
        "Limited initial feature set",
        "May appear unpolished to early users"
      ]
    },
    {
      title: "Strategic Partnership Launch",
      description: "Leverage existing businesses in complementary markets to gain immediate credibility and customer access.",
      stage: "start",
      complexity: 6,
      timeframe: "3-6 months",
      resources: 5,
      pros: [
        "Faster market entry",
        "Shared resources and expertise",
        "Built-in customer base"
      ],
      cons: [
        "Complex negotiations required",
        "Potential strategic misalignment",
        "Revenue sharing considerations"
      ]
    }
  ];

  const growthStrategies = [
    {
      title: "Vertical Integration Strategy",
      description: "Acquire businesses within your supply chain to reduce costs, improve efficiency, and increase profit margins.",
      stage: "grow",
      complexity: 7,
      timeframe: "6-12 months",
      resources: 8,
      pros: [
        "Increased control over supply chain",
        "Reduced dependency on suppliers",
        "Cost savings through efficiency"
      ],
      cons: [
        "High initial capital investment",
        "Requires significant management bandwidth",
        "Potential regulatory challenges"
      ]
    },
    {
      title: "Geographic Expansion",
      description: "Expand current business model into new geographical markets to increase revenue and establish broader market presence.",
      stage: "grow",
      complexity: 6,
      timeframe: "4-8 months",
      resources: 7,
      pros: [
        "Leverages proven business model",
        "Diversifies regional economic risk",
        "Economies of scale advantages"
      ],
      cons: [
        "Cultural and regulatory differences",
        "Requires local market expertise",
        "Logistical complexities"
      ]
    }
  ];

  const diversifyStrategies = [
    {
      title: "Market Diversification",
      description: "Expand into adjacent markets with existing products to increase revenue streams and reduce market-specific risks.",
      stage: "diversify",
      complexity: 6,
      timeframe: "3-9 months",
      resources: 5,
      pros: [
        "Reduced market concentration risk",
        "Leverages existing capabilities",
        "Potential for rapid growth"
      ],
      cons: [
        "May dilute focus on core business",
        "Requires market-specific adaptations",
        "Potential brand confusion"
      ]
    },
    {
      title: "Product Line Extension",
      description: "Develop new products or services that complement existing offerings and appeal to your current customer base.",
      stage: "diversify",
      complexity: 5,
      timeframe: "4-7 months",
      resources: 6,
      pros: [
        "Leverages existing customer relationships",
        "Shared marketing and distribution",
        "Cross-selling opportunities"
      ],
      cons: [
        "Product development costs",
        "Potential quality control issues",
        "Market positioning challenges"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Growth Strategies</h2>
          <p className="text-muted-foreground">
            Proven strategies to start, grow, or diversify your business.
          </p>
        </div>
        <Button className="bg-brand-purple hover:bg-brand-purple-dark w-full md:w-auto">
          <TrendingUpIcon className="mr-2 h-4 w-4" /> New Strategy
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search strategies..." className="pl-10" />
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <Tabs defaultValue="all" className="w-full">
          <div className="border-b px-4">
            <TabsList className="bg-transparent h-12">
              <TabsTrigger value="all" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">
                All Strategies
              </TabsTrigger>
              <TabsTrigger value="start" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">
                Starting a Business
              </TabsTrigger>
              <TabsTrigger value="grow" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">
                Growing a Business
              </TabsTrigger>
              <TabsTrigger value="diversify" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">
                Diversification
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="p-4">
            <div className="grid gap-6 lg:grid-cols-2">
              {[...startStrategies, ...growthStrategies, ...diversifyStrategies].map((strategy, idx) => (
                <StrategyCard
                  key={idx}
                  title={strategy.title}
                  description={strategy.description}
                  stage={strategy.stage as "start" | "grow" | "diversify"}
                  complexity={strategy.complexity}
                  timeframe={strategy.timeframe}
                  resources={strategy.resources}
                  pros={strategy.pros}
                  cons={strategy.cons}
                />
              ))}
              <div className="border-2 border-dashed rounded-lg flex items-center justify-center p-6 min-h-[250px]">
                <Button variant="ghost" className="flex flex-col h-full w-full gap-2">
                  <PlusIcon className="h-8 w-8 text-muted-foreground" />
                  <span className="text-muted-foreground">Add Custom Strategy</span>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="start" className="p-4">
            <div className="grid gap-6 lg:grid-cols-2">
              {startStrategies.map((strategy, idx) => (
                <StrategyCard
                  key={idx}
                  title={strategy.title}
                  description={strategy.description}
                  stage={strategy.stage as "start" | "grow" | "diversify"}
                  complexity={strategy.complexity}
                  timeframe={strategy.timeframe}
                  resources={strategy.resources}
                  pros={strategy.pros}
                  cons={strategy.cons}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="grow" className="p-4">
            <div className="grid gap-6 lg:grid-cols-2">
              {growthStrategies.map((strategy, idx) => (
                <StrategyCard
                  key={idx}
                  title={strategy.title}
                  description={strategy.description}
                  stage={strategy.stage as "start" | "grow" | "diversify"}
                  complexity={strategy.complexity}
                  timeframe={strategy.timeframe}
                  resources={strategy.resources}
                  pros={strategy.pros}
                  cons={strategy.cons}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="diversify" className="p-4">
            <div className="grid gap-6 lg:grid-cols-2">
              {diversifyStrategies.map((strategy, idx) => (
                <StrategyCard
                  key={idx}
                  title={strategy.title}
                  description={strategy.description}
                  stage={strategy.stage as "start" | "grow" | "diversify"}
                  complexity={strategy.complexity}
                  timeframe={strategy.timeframe}
                  resources={strategy.resources}
                  pros={strategy.pros}
                  cons={strategy.cons}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StrategyPage;
