
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    type: "contact",
    action: "добавил(а)",
    subject: "Иван Петров",
    time: "2 часа назад",
    user: "Вы",
  },
  {
    id: 2,
    type: "task",
    action: "завершил(а)",
    subject: "Звонок с маркетинговой командой",
    time: "4 часа назад",
    user: "Анна К.",
  },
  {
    id: 3,
    type: "deal",
    action: "обновил(а)",
    subject: "Продление лицензии ПО",
    time: "Вчера",
    user: "Михаил П.",
  },
  {
    id: 4,
    type: "contact",
    action: "отправил(а) письмо",
    subject: "Елена Сидорова",
    time: "Вчера",
    user: "Вы",
  },
  {
    id: 5,
    type: "task",
    action: "создал(а)",
    subject: "Подготовка квартального отчёта",
    time: "2 дня назад",
    user: "Вы",
  },
];

export function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Недавняя активность</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-start space-x-3 pb-3 border-b last:border-0"
            >
              <div className={`w-2 h-2 mt-2 rounded-full ${getActivityTypeColor(activity.type)}`} />
              <div className="space-y-1">
                <div>
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-muted-foreground"> {activity.action} </span>
                  <span className="font-medium">{activity.subject}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getActivityTypeColor(type: string): string {
  switch (type) {
    case "contact":
      return "bg-blue-500";
    case "task":
      return "bg-green-500";
    case "deal":
      return "bg-amber-500";
    default:
      return "bg-gray-500";
  }
}
