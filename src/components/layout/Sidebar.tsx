
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
      "transition-all duration-300 bg-white border-r border-gray-200 flex flex-col h-screen shadow-sm",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="text-xl font-medium text-gray-900">SnappyCRM</div>
        )}
        <Button 
          variant="ghost" 
          size="icon"
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
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
                "flex items-center px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                isActive 
                  ? "bg-blue-50 text-blue-700 shadow-sm" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                collapsed ? "justify-center" : "space-x-3"
              )}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-medium">
            П
          </div>
          {!collapsed && (
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Пользователь</div>
              <div className="text-xs text-gray-500">Администратор</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
