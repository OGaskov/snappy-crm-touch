
import { PageTitle } from "@/components/layout/PageTitle";

export default function Documents() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Documents" 
        subtitle="Manage your files and documents"
      />
      
      <div className="bg-white p-8 rounded-md border shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <h3 className="text-2xl font-semibold mb-4">Document Management Coming Soon</h3>
        <p className="text-muted-foreground text-center max-w-md">
          The document management functionality is currently under development. You'll be able to 
          upload, organize, and share documents with your team and clients.
        </p>
      </div>
    </div>
  );
}
