
import { PageTitle } from "@/components/layout/PageTitle";

export default function Calendar() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Календарь" 
        subtitle="Управление встречами и расписанием"
      />
      
      <div className="bg-white p-8 rounded-md border shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <h3 className="text-2xl font-semibold mb-4">Календарь скоро будет доступен</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Функционал календаря находится в разработке. Вы сможете 
          управлять встречами, устанавливать напоминания и синхронизироваться с вашими любимыми приложениями календаря.
        </p>
      </div>
    </div>
  );
}
