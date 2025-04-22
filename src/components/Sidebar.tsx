
import { cn } from "@/lib/utils";
import { 
  LightbulbIcon, BarChartIcon, TrendingUpIcon, 
  GlobeIcon, BookOpenIcon, FolderIcon
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <BarChartIcon className="h-5 w-5" />,
      path: "/"
    },
    {
      title: "Idea Generation",
      icon: <LightbulbIcon className="h-5 w-5" />,
      path: "/ideas"
    },
    {
      title: "Growth Strategy",
      icon: <TrendingUpIcon className="h-5 w-5" />,
      path: "/strategy"
    },
    {
      title: "Economic Impact",
      icon: <GlobeIcon className="h-5 w-5" />,
      path: "/impact"
    },
    {
      title: "Resources",
      icon: <BookOpenIcon className="h-5 w-5" />,
      path: "/resources"
    },
    {
      title: "My Projects",
      icon: <FolderIcon className="h-5 w-5" />,
      path: "/projects"
    }
  ];

  return (
    <div className={cn("pb-12 w-full max-w-64 bg-white border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold">Navigation</h2>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                    isActive 
                      ? "bg-brand-purple text-white" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  )
                }
              >
                {item.icon}
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
