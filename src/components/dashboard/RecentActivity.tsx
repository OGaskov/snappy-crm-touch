
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    type: "contact",
    action: "added",
    subject: "John Doe",
    time: "2 hours ago",
    user: "You",
  },
  {
    id: 2,
    type: "task",
    action: "completed",
    subject: "Call with marketing team",
    time: "4 hours ago",
    user: "Anna K.",
  },
  {
    id: 3,
    type: "deal",
    action: "updated",
    subject: "Software License Renewal",
    time: "Yesterday",
    user: "Mike P.",
  },
  {
    id: 4,
    type: "contact",
    action: "email sent",
    subject: "Sarah Johnson",
    time: "Yesterday",
    user: "You",
  },
  {
    id: 5,
    type: "task",
    action: "created",
    subject: "Prepare quarterly report",
    time: "2 days ago",
    user: "You",
  },
];

export function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
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
