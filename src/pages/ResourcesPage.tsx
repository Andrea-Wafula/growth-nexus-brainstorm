
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpenIcon, ExternalLinkIcon, DownloadIcon, StarIcon, BookmarkIcon } from "lucide-react";

const ResourcesPage = () => {
  // Sample resource data
  const guides = [
    {
      title: "Market Entry Strategy Guide",
      description: "A comprehensive guide to entering new markets while maximizing economic impact for your business and community.",
      category: "Strategy",
      rating: 4.8,
      downloadCount: 1243,
      isNew: true,
    },
    {
      title: "Economic Impact Assessment Toolkit",
      description: "Tools and templates to measure your business's contribution to local and national economic development.",
      category: "Impact",
      rating: 4.6,
      downloadCount: 956,
      isNew: false,
    },
    {
      title: "Sustainable Growth Framework",
      description: "Build a business that creates lasting economic value while supporting social and environmental sustainability.",
      category: "Growth",
      rating: 4.9,
      downloadCount: 1578,
      isNew: true,
    },
  ];

  const templates = [
    {
      title: "Business Impact Statement Template",
      description: "Document your business's economic contributions with this comprehensive template for stakeholders and policymakers.",
      category: "Documentation",
      rating: 4.7,
      downloadCount: 834,
      isNew: false,
    },
    {
      title: "Growth Strategy Canvas",
      description: "Visual tool for mapping your growth strategy with clear focus on economic impact metrics.",
      category: "Planning",
      rating: 4.5,
      downloadCount: 1120,
      isNew: false,
    },
  ];

  const training = [
    {
      title: "Measuring Economic Impact Masterclass",
      description: "Learn how to quantify and communicate your business's contribution to economic development.",
      category: "Course",
      rating: 4.9,
      downloadCount: 765,
      isNew: true,
    },
    {
      title: "Growth Strategy Workshop Series",
      description: "Step-by-step workshop materials for developing profit-focused growth strategies with positive economic spillover effects.",
      category: "Workshop",
      rating: 4.8,
      downloadCount: 642,
      isNew: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
          <p className="text-muted-foreground">
            Tools, templates, and guides to support your business growth and economic impact.
          </p>
        </div>
        <Button className="bg-brand-purple hover:bg-brand-purple-dark w-full md:w-auto">
          <BookOpenIcon className="mr-2 h-4 w-4" /> Access Pro Resources
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-white border">
          <TabsTrigger value="all" className="text-sm">All Resources</TabsTrigger>
          <TabsTrigger value="guides" className="text-sm">Guides</TabsTrigger>
          <TabsTrigger value="templates" className="text-sm">Templates</TabsTrigger>
          <TabsTrigger value="training" className="text-sm">Training</TabsTrigger>
          <TabsTrigger value="saved" className="text-sm">Saved</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...guides, ...templates, ...training].map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="guides" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="training" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {training.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="p-6 text-center">
          <div className="max-w-md mx-auto">
            <BookmarkIcon className="h-12 w-12 mx-auto text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-medium">No saved resources yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Bookmark resources you find useful. Your saved resources will appear here for easy access.
            </p>
            <Button className="mt-4 bg-brand-purple hover:bg-brand-purple-dark">Browse Resources</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ResourceCardProps {
  resource: {
    title: string;
    description: string;
    category: string;
    rating: number;
    downloadCount: number;
    isNew: boolean;
  };
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            {resource.isNew && (
              <Badge className="bg-brand-purple text-white mb-1">New</Badge>
            )}
            <Badge variant="outline" className="bg-slate-50">
              {resource.category}
            </Badge>
            <CardTitle className="text-lg pt-1">{resource.title}</CardTitle>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <BookmarkIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {resource.description}
        </CardDescription>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm ml-1 font-medium">{resource.rating}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            {resource.downloadCount.toLocaleString()} downloads
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between">
        <Button variant="outline" size="sm">
          <ExternalLinkIcon className="h-4 w-4 mr-1" />
          Preview
        </Button>
        <Button size="sm" className="bg-brand-purple hover:bg-brand-purple-dark">
          <DownloadIcon className="h-4 w-4 mr-1" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourcesPage;
