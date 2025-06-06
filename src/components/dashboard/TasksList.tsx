
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  due?: string;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Связаться с новыми лидами",
    completed: false,
    priority: "high",
    due: "Сегодня"
  },
  {
    id: 2,
    title: "Подготовить предложение для ООО «Рога и Копыта»",
    completed: false,
    priority: "high",
    due: "Завтра"
  },
  {
    id: 3,
    title: "Пересмотреть ежемесячные показатели",
    completed: false,
    priority: "medium",
    due: "Пятница"
  },
  {
    id: 4,
    title: "Организовать документацию продаж",
    completed: true,
    priority: "low",
  },
  {
    id: 5,
    title: "Обновить контактные данные клиентов",
    completed: true,
    priority: "low",
  }
];

export function TasksList() {
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Задачи</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-3 text-muted-foreground">К выполнению</h4>
            <div className="space-y-2">
              {incompleteTasks.map(task => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
          
          {completedTasks.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">Выполненные</h4>
              <div className="space-y-2 opacity-70">
                {completedTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function TaskItem({ task }: { task: Task }) {
  return (
    <div className="flex items-start space-x-3">
      <Checkbox id={`task-${task.id}`} checked={task.completed} />
      <div className="flex-1 space-y-1">
        <label 
          htmlFor={`task-${task.id}`}
          className={cn(
            "text-sm font-medium cursor-pointer",
            task.completed && "line-through"
          )}
        >
          {task.title}
        </label>
        {task.due && (
          <div className="flex items-center space-x-2 text-xs">
            <span className={cn(
              "px-1.5 py-0.5 rounded text-xs",
              getPriorityColor(task.priority)
            )}>
              {getPriorityText(task.priority)}
            </span>
            <span className="text-muted-foreground">Срок: {task.due}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "low":
      return "bg-blue-100 text-blue-800";
    case "medium":
      return "bg-amber-100 text-amber-800";
    case "high":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getPriorityText(priority: string) {
  switch (priority) {
    case "low":
      return "Низкий";
    case "medium":
      return "Средний";
    case "high":
      return "Высокий";
    default:
      return priority;
  }
}
