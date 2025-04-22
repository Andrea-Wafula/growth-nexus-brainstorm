
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FolderIcon, PlusIcon, MoreHorizontalIcon, CalendarIcon, UserIcon, 
  BarChart2Icon, EyeIcon, EditIcon, TrashIcon, ArrowUpRightIcon 
} from "lucide-react";
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const ProjectsPage = () => {
  // Sample projects data
  const projects = [
    {
      id: "proj-001",
      title: "Market Expansion Strategy",
      description: "Planning for expansion into the northeast region with focus on economic impact.",
      status: "In Progress",
      dueDate: "May 15, 2025",
      progress: 65,
      team: ["JD", "AK", "MT"],
      category: "Growth"
    },
    {
      id: "proj-002",
      title: "Supply Chain Optimization",
      description: "Streamlining supplier relationships to boost local economic contribution.",
      status: "Planning",
      dueDate: "June 2, 2025",
      progress: 25,
      team: ["JD", "RB"],
      category: "Optimization"
    },
    {
      id: "proj-003",
      title: "New Product Line Launch",
      description: "Developing a sustainable product line with strong profit margins and local manufacturing.",
      status: "Completed",
      dueDate: "April 10, 2025",
      progress: 100,
      team: ["JD", "AK", "LP", "RB"],
      category: "Diversification"
    },
    {
      id: "proj-004",
      title: "Workforce Development Initiative",
      description: "Implementing training programs to enhance local workforce skills and increase hiring.",
      status: "In Progress",
      dueDate: "May 28, 2025",
      progress: 40,
      team: ["JD", "MT"],
      category: "Impact"
    },
  ];

  // Get status style
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Planning":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Get category style
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Growth":
        return "bg-brand-purple-light text-brand-purple-dark";
      case "Optimization":
        return "bg-blue-100 text-blue-800";
      case "Diversification":
        return "bg-green-100 text-green-800";
      case "Impact":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
          <p className="text-muted-foreground">
            Manage your growth and economic impact initiatives.
          </p>
        </div>
        <Button className="bg-brand-purple hover:bg-brand-purple-dark w-full md:w-auto">
          <PlusIcon className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryStyle(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={getStatusStyle(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="flex items-center">
                        <EyeIcon className="mr-2 h-4 w-4" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center">
                        <EditIcon className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center text-red-600">
                        <TrashIcon className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        project.status === "Completed" 
                          ? "bg-green-500" 
                          : "bg-brand-purple"
                      }`} 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Due: {project.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Team:</span>
                    <div className="flex -space-x-2">
                      {project.team.map((member, idx) => (
                        <div 
                          key={idx} 
                          className="h-6 w-6 rounded-full bg-brand-purple flex items-center justify-center text-[10px] text-white border-2 border-white"
                        >
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-64 p-6 bg-slate-50 border-t md:border-t-0 md:border-l flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Economic Impact</h4>
                    <div className="flex items-center">
                      <BarChart2Icon className="h-4 w-4 text-brand-purple mr-1" />
                      <span className="font-medium">Medium-High</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Jobs:</span>
                        <span>+15</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Local GDP:</span>
                        <span>+1.2%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Profit Est:</span>
                        <span>+8.5%</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-brand-purple hover:bg-brand-purple-dark">
                  Open Project <ArrowUpRightIcon className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
        
        <Card className="border-2 border-dashed">
          <div className="flex items-center justify-center p-8">
            <Button variant="ghost" className="flex flex-col h-full w-full gap-2 py-8">
              <div className="h-12 w-12 rounded-full bg-brand-purple-light flex items-center justify-center">
                <PlusIcon className="h-6 w-6 text-brand-purple" />
              </div>
              <span className="font-medium">Create New Project</span>
              <p className="text-muted-foreground text-sm">
                Start tracking a new business initiative
              </p>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
