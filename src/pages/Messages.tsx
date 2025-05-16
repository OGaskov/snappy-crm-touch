
import { PageTitle } from "@/components/layout/PageTitle";

export default function Messages() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Сообщения" 
        subtitle="Ваш центр коммуникаций"
      />
      
      <div className="bg-white p-8 rounded-md border shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <h3 className="text-2xl font-semibold mb-4">Центр сообщений скоро будет доступен</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Функционал сообщений находится в разработке. Вы сможете 
          отправлять и получать сообщения, отслеживать историю коммуникаций и сотрудничать с командой.
        </p>
      </div>
    </div>
  );
}
