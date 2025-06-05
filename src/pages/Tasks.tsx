
import { useState } from "react";
import { PageTitle } from "@/components/layout/PageTitle";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { TaskForm } from "@/components/tasks/TaskForm";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: number;
  title: string;
  subject: string;
  assignees: string[];
  deadline: string;
  status: "новая" | "в работе" | "завершена" | "отложена";
}

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Настройка CRM системы",
    subject: "Техническая работа",
    assignees: ["Иван Петров", "Мария Сидорова"],
    deadline: "2024-01-15",
    status: "в работе"
  },
  {
    id: 2,
    title: "Звонок клиенту ООО Рога и Копыта",
    subject: "Продажи",
    assignees: ["Алексей Иванов"],
    deadline: "2024-01-10",
    status: "новая"
  },
  {
    id: 3,
    title: "Подготовка отчета за месяц",
    subject: "Отчетность",
    assignees: ["Елена Козлова", "Петр Васильев"],
    deadline: "2024-01-20",
    status: "завершена"
  },
  {
    id: 4,
    title: "Встреча с поставщиком",
    subject: "Закупки",
    assignees: ["Анна Федорова"],
    deadline: "2024-01-25",
    status: "отложена"
  }
];

const getStatusBadge = (status: Task["status"]) => {
  const statusConfig = {
    "новая": { 
      variant: "secondary" as const, 
      label: "Новая",
      className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-md"
    },
    "в работе": { 
      variant: "default" as const, 
      label: "В работе",
      className: "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-md"
    },
    "завершена": { 
      variant: "outline" as const, 
      label: "Завершена",
      className: "bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-md"
    },
    "отложена": { 
      variant: "destructive" as const, 
      label: "Отложена",
      className: "bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-md"
    }
  };

  const config = statusConfig[status];
  return <Badge variant={config.variant} className={config.className}>{config.label}</Badge>;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCreateTask = () => {
    setIsDialogOpen(true);
  };

  const handleFormSubmit = (formData: any) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: formData.title,
      subject: formData.subject,
      assignees: formData.assignees.split(',').map((name: string) => name.trim()),
      deadline: formData.deadline,
      status: formData.status,
    };

    setTasks([newTask, ...tasks]);
    setIsDialogOpen(false);
    
    toast({
      title: "Задача создана",
      description: `Задача "${formData.title}" была успешно создана.`,
    });
  };

  const handleFormCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <PageTitle 
        title="Задачи" 
        subtitle="Управление задачами и проектами"
        actions={
          <Button 
            onClick={handleCreateTask}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <Plus className="mr-2 h-4 w-4" />
            Создать задачу
          </Button>
        }
      />
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Список задач</h3>
          <p className="text-sm text-gray-600 mt-1">Всего задач: {tasks.length}</p>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50/70">
              <TableHead className="font-semibold text-gray-700">Название</TableHead>
              <TableHead className="font-semibold text-gray-700">Тема</TableHead>
              <TableHead className="font-semibold text-gray-700">Исполнители</TableHead>
              <TableHead className="font-semibold text-gray-700">Срок</TableHead>
              <TableHead className="font-semibold text-gray-700">Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow 
                key={task.id} 
                className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 border-b border-gray-100"
              >
                <TableCell className="font-medium text-gray-900">{task.title}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300">
                    {task.subject}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {task.assignees.map((assignee, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 text-purple-700 hover:from-purple-100 hover:to-blue-100 transition-colors"
                      >
                        {assignee}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-200">
                    {new Date(task.deadline).toLocaleDateString('ru-RU')}
                  </span>
                </TableCell>
                <TableCell>
                  {getStatusBadge(task.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Создать новую задачу
            </DialogTitle>
          </DialogHeader>
          <TaskForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
