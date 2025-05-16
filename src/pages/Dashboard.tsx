
import { PageTitle } from "@/components/layout/PageTitle";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, Calendar, MessagesSquare, DollarSign } from "lucide-react";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TasksList } from "@/components/dashboard/TasksList";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Панель управления" 
        subtitle="Добро пожаловать! Вот обзор данных вашей CRM."
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Всего контактов" 
          value="1,254"
          icon={<Users className="h-5 w-5 text-muted-foreground" />}
          description="Активные контакты"
          trend={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Задачи к выполнению" 
          value="17"
          icon={<Calendar className="h-5 w-5 text-muted-foreground" />}
          description="На этой неделе"
        />
        <StatCard 
          title="Непрочитанные сообщения" 
          value="34"
          icon={<MessagesSquare className="h-5 w-5 text-muted-foreground" />}
          description="В вашем почтовом ящике"
          trend={{ value: 5, positive: true }}
        />
        <StatCard 
          title="Воронка продаж" 
          value="₽3.8М"
          icon={<DollarSign className="h-5 w-5 text-muted-foreground" />}
          description="Ожидаемая выручка"
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
