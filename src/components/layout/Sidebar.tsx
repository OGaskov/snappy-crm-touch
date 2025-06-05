
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Users, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Settings,
  Menu,
  X,
  CheckSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  className?: string;
}

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Панель управления",
    icon: BarChart3,
    href: "/"
  },
  {
    title: "Контакты",
    icon: Users,
    href: "/contacts"
  },
  {
    title: "Задачи",
    icon: CheckSquare,
    href: "/tasks"
  },
  {
    title: "Календарь",
    icon: Calendar,
    href: "/calendar"
  },
  {
    title: "Сообщения",
    icon: MessageSquare,
    href: "/messages"
  },
  {
    title: "Документы",
    icon: FileText,
    href: "/documents"
  },
  {
    title: "Настройки",
    icon: Settings,
    href: "/settings"
  }
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cn(
      "transition-all duration-300 bg-sidebar text-sidebar-foreground flex flex-col h-screen border-r border-sidebar-border",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="text-xl font-bold text-sidebar-foreground">SnappyCRM</div>
        )}
        <Button 
          variant="ghost" 
          size="icon"
          className="text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={toggleSidebar}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.title}
              to={item.href}
              className={cn(
                "flex items-center px-2 py-3 rounded-md transition-colors",
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                collapsed ? "justify-center" : "space-x-3"
              )}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
            П
          </div>
          {!collapsed && (
            <div className="ml-3">
              <div className="text-sm font-medium">Пользователь</div>
              <div className="text-xs text-sidebar-foreground/70">Администратор</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
