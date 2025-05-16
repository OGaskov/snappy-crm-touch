
import { PageTitle } from "@/components/layout/PageTitle";

export default function Documents() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Документы" 
        subtitle="Управление файлами и документами"
      />
      
      <div className="bg-white p-8 rounded-md border shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <h3 className="text-2xl font-semibold mb-4">Управление документами скоро будет доступен</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Функционал управления документами находится в разработке. Вы сможете 
          загружать, организовывать и делиться документами с вашей командой и клиентами.
        </p>
      </div>
    </div>
  );
}
