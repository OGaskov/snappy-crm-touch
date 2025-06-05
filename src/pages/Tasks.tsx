
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
      variant: "default" as const, 
      label: "Новая",
      className: "bg-blue-100 text-blue-800 border-blue-200"
    },
    "в работе": { 
      variant: "default" as const, 
      label: "В работе",
      className: "bg-orange-100 text-orange-800 border-orange-200"
    },
    "завершена": { 
      variant: "default" as const, 
      label: "Завершена",
      className: "bg-green-100 text-green-800 border-green-200"
    },
    "отложена": { 
      variant: "default" as const, 
      label: "Отложена",
      className: "bg-red-100 text-red-800 border-red-200"
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
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
          >
            <Plus className="mr-2 h-4 w-4" />
            Создать задачу
          </Button>
        }
      />
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">Список задач</h3>
          <p className="text-sm text-gray-600 mt-1">Всего задач: {tasks.length}</p>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-medium text-gray-700 py-4">Название</TableHead>
                <TableHead className="font-medium text-gray-700">Тема</TableHead>
                <TableHead className="font-medium text-gray-700">Исполнители</TableHead>
                <TableHead className="font-medium text-gray-700">Срок</TableHead>
                <TableHead className="font-medium text-gray-700">Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow 
                  key={task.id} 
                  className="hover:bg-gray-50 transition-colors border-b border-gray-100"
                >
                  <TableCell className="font-medium text-gray-900 py-4">{task.title}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                      {task.subject}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {task.assignees.map((assignee, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs bg-purple-50 border-purple-200 text-purple-700"
                        >
                          {assignee}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-amber-50 text-amber-800 border border-amber-200">
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
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900">
              Создать новую задачу
            </DialogTitle>
          </DialogHeader>
          <TaskForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
