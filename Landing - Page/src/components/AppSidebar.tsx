
import { Link, useLocation } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Calendar, 
  BarChart3, 
  UserCheck, 
  Settings, 
  Heart,
  Activity,
  Clock
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { useRole } from "../contexts/RoleContext";

const doctorItems = [
  { title: "Doctor Dashboard", url: "/dashboard/doctor", icon: Heart },
  { title: "Appointments", url: "/dashboard/appointments", icon: Calendar },
  { title: "Availability", url: "/dashboard/availability", icon: Clock },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

const hrItems = [
  { title: "HR Dashboard", url: "/dashboard/hr", icon: Users },
  { title: "Team Analytics", url: "/dashboard/analytics", icon: Activity },
  { title: "Employee Analytics", url: "/dashboard/employee-analytics", icon: UserCheck },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { currentRole } = useRole();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  // Use role context to determine which items to show
  const items = currentRole === 'doctor' ? doctorItems : hrItems;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            {!collapsed && (
              <div>
                <h3 className="font-bold text-lg bg-wellness-gradient bg-clip-text text-transparent">
                  Nirvaha
                </h3>
                <p className="text-xs text-muted-foreground">Mental Wellness</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-sm font-medium text-muted-foreground">
            {!collapsed && (currentRole === 'doctor' ? "Doctor Portal" : "HR Portal")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url} 
                      className={`flex items-center px-4 py-2 rounded-md transition-colors ${getNavCls({ isActive: isActive(item.url) })}`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
