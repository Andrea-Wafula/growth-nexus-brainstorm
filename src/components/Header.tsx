
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b bg-white py-3 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-purple p-1.5 rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" 
                stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold">GrowthNexus</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand-purple flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <span className="hidden md:inline text-sm font-medium">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
