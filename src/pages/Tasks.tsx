
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
    "новая": { variant: "secondary" as const, label: "Новая" },
    "в работе": { variant: "default" as const, label: "В работе" },
    "завершена": { variant: "outline" as const, label: "Завершена" },
    "отложена": { variant: "destructive" as const, label: "Отложена" }
  };

  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
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
          <Button onClick={handleCreateTask}>
            <Plus className="mr-2 h-4 w-4" />
            Создать задачу
          </Button>
        }
      />
      
      <div className="bg-white rounded-md border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Название</TableHead>
              <TableHead>Тема</TableHead>
              <TableHead>Исполнители</TableHead>
              <TableHead>Срок</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>{task.subject}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {task.assignees.map((assignee, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {assignee}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(task.deadline).toLocaleDateString('ru-RU')}
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
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Создать новую задачу</DialogTitle>
          </DialogHeader>
          <TaskForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
