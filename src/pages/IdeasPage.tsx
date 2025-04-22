
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LightbulbIcon, PlusIcon, SearchIcon, FilterIcon, SlidersIcon } from "lucide-react";
import IdeaCard from "@/components/IdeaCard";

const IdeasPage = () => {
  // Sample idea data
  const startIdeas = [
    {
      title: "Sustainable Supply Chain Solutions",
      description: "Create a platform that helps businesses implement sustainable practices in their supply chains, leveraging blockchain for transparency and accountability.",
      category: "Start-up",
      profitPotential: 8,
      economicImpact: 9,
    },
    {
      title: "Healthcare Remote Monitoring Platform",
      description: "Develop a platform connecting healthcare providers with patients for remote monitoring, reducing hospital visits and improving preventative care.",
      category: "Start-up",
      profitPotential: 9,
      economicImpact: 10,
    },
    {
      title: "Local Food Marketplace App",
      description: "Build a digital marketplace connecting local farmers and food producers directly with consumers, reducing food miles and supporting local economies.",
      category: "Start-up",
      profitPotential: 7,
      economicImpact: 8,
    },
  ];

  const growthIdeas = [
    {
      title: "AI-Powered Customer Service Optimization",
      description: "Develop an AI solution that helps businesses improve customer service efficiency while maintaining personal touch, ideal for service-based companies.",
      category: "Growth",
      profitPotential: 9,
      economicImpact: 7,
    },
    {
      title: "Digital Transformation Services",
      description: "Offer specialized consulting to help traditional businesses adapt to digital environments with custom solutions and training programs.",
      category: "Growth",
      profitPotential: 8,
      economicImpact: 8,
    },
  ];

  const diversifyIdeas = [
    {
      title: "Localized E-commerce Expansion",
      description: "Strategic framework for established businesses to expand into new local markets with culturally-relevant e-commerce strategies.",
      category: "Diversification",
      profitPotential: 7,
      economicImpact: 8,
    },
    {
      title: "Educational Technology Add-On",
      description: "Create educational technology solutions that can be integrated with existing business services to diversify revenue streams.",
      category: "Diversification",
      profitPotential: 6,
      economicImpact: 9,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Business Ideas</h2>
          <p className="text-muted-foreground">
            Explore and generate profitable business ideas with high economic impact.
          </p>
        </div>
        <Button className="bg-brand-purple hover:bg-brand-purple-dark w-full md:w-auto">
          <LightbulbIcon className="mr-2 h-4 w-4" /> New Idea
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search ideas..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="startup">Start-up</SelectItem>
              <SelectItem value="growth">Growth</SelectItem>
              <SelectItem value="diversify">Diversification</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <SlidersIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <Tabs defaultValue="all" className="w-full">
          <div className="border-b px-4">
            <TabsList className="bg-transparent h-12">
              <TabsTrigger value="all" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">All Ideas</TabsTrigger>
              <TabsTrigger value="startup" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">Start-up</TabsTrigger>
              <TabsTrigger value="growth" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">Growth</TabsTrigger>
              <TabsTrigger value="diversify" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">Diversify</TabsTrigger>
              <TabsTrigger value="saved" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white rounded-md">Saved</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...startIdeas, ...growthIdeas, ...diversifyIdeas].map((idea, idx) => (
                <IdeaCard
                  key={idx}
                  title={idea.title}
                  description={idea.description}
                  category={idea.category}
                  profitPotential={idea.profitPotential}
                  economicImpact={idea.economicImpact}
                />
              ))}
              <div className="border-2 border-dashed rounded-lg flex items-center justify-center p-6 h-full min-h-[300px]">
                <Button variant="ghost" className="flex flex-col h-full w-full gap-2">
                  <PlusIcon className="h-8 w-8 text-muted-foreground" />
                  <span className="text-muted-foreground">Add New Idea</span>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="startup" className="p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {startIdeas.map((idea, idx) => (
                <IdeaCard
                  key={idx}
                  title={idea.title}
                  description={idea.description}
                  category={idea.category}
                  profitPotential={idea.profitPotential}
                  economicImpact={idea.economicImpact}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="growth" className="p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {growthIdeas.map((idea, idx) => (
                <IdeaCard
                  key={idx}
                  title={idea.title}
                  description={idea.description}
                  category={idea.category}
                  profitPotential={idea.profitPotential}
                  economicImpact={idea.economicImpact}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="diversify" className="p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {diversifyIdeas.map((idea, idx) => (
                <IdeaCard
                  key={idx}
                  title={idea.title}
                  description={idea.description}
                  category={idea.category}
                  profitPotential={idea.profitPotential}
                  economicImpact={idea.economicImpact}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="p-6 text-center">
            <div className="max-w-md mx-auto">
              <LightbulbIcon className="h-12 w-12 mx-auto text-muted-foreground opacity-50" />
              <h3 className="mt-4 text-lg font-medium">No saved ideas yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bookmark ideas you like to access them quickly later. Your saved ideas will appear here.
              </p>
              <Button className="mt-4 bg-brand-purple hover:bg-brand-purple-dark">Browse Ideas</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IdeasPage;
