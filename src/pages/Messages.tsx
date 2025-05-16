
import { PageTitle } from "@/components/layout/PageTitle";

export default function Messages() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Messages" 
        subtitle="Your communication center"
      />
      
      <div className="bg-white p-8 rounded-md border shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <h3 className="text-2xl font-semibold mb-4">Messaging Center Coming Soon</h3>
        <p className="text-muted-foreground text-center max-w-md">
          The messaging functionality is currently under development. You'll be able to 
          send and receive messages, track communication history, and collaborate with your team.
        </p>
      </div>
    </div>
  );
}
