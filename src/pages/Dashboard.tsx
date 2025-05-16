
import { PageTitle } from "@/components/layout/PageTitle";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, Calendar, MessagesSquare, DollarSign } from "lucide-react";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TasksList } from "@/components/dashboard/TasksList";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Dashboard" 
        subtitle="Welcome back! Here's an overview of your CRM data."
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Contacts" 
          value="1,254"
          icon={<Users className="h-5 w-5 text-muted-foreground" />}
          description="Active contacts"
          trend={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Tasks Due" 
          value="17"
          icon={<Calendar className="h-5 w-5 text-muted-foreground" />}
          description="This week"
        />
        <StatCard 
          title="Unread Messages" 
          value="34"
          icon={<MessagesSquare className="h-5 w-5 text-muted-foreground" />}
          description="In your inbox"
          trend={{ value: 5, positive: true }}
        />
        <StatCard 
          title="Sales Pipeline" 
          value="$52.6K"
          icon={<DollarSign className="h-5 w-5 text-muted-foreground" />}
          description="Expected revenue"
          trend={{ value: 8, positive: false }}
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <RecentActivity />
        <TasksList />
      </div>
    </div>
  );
}
