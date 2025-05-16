
import { PageTitle } from "@/components/layout/PageTitle";

export default function Calendar() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Calendar" 
        subtitle="Manage your appointments and schedule"
      />
      
      <div className="bg-white p-8 rounded-md border shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <h3 className="text-2xl font-semibold mb-4">Calendar View Coming Soon</h3>
        <p className="text-muted-foreground text-center max-w-md">
          The calendar functionality is currently under development. You'll be able to 
          manage appointments, set reminders, and sync with your favorite calendar apps.
        </p>
      </div>
    </div>
  );
}
