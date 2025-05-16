
import { PageTitle } from "@/components/layout/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Filter } from "lucide-react";

const contacts = [
  { id: 1, name: "Иванов Иван", email: "ivan@example.com", phone: "+7 123 456 7890", company: "ООО «Рога и Копыта»", status: "Клиент" },
  { id: 2, name: "Анна Петрова", email: "anna@example.com", phone: "+7 123 456 7891", company: "ЗАО «ТехноСервис»", status: "Лид" },
  { id: 3, name: "Роберт Смирнов", email: "robert@example.com", phone: "+7 123 456 7892", company: "ИП Смирнов", status: "Клиент" },
  { id: 4, name: "Елена Соколова", email: "elena@example.com", phone: "+7 123 456 7893", company: "ООО «ТехноПром»", status: "Потенциальный" },
  { id: 5, name: "Михаил Кузнецов", email: "mikhail@example.com", phone: "+7 123 456 7894", company: "ООО «Рога и Копыта»", status: "Клиент" },
  { id: 6, name: "Светлана Морозова", email: "svetlana@example.com", phone: "+7 123 456 7895", company: "Студия Дизайна", status: "Лид" },
  { id: 7, name: "Дмитрий Волков", email: "dmitry@example.com", phone: "+7 123 456 7896", company: "ОАО «ПродажиПро»", status: "Потенциальный" },
  { id: 8, name: "Ольга Павлова", email: "olga@example.com", phone: "+7 123 456 7897", company: "Маркетинг Инк", status: "Клиент" },
];

export default function Contacts() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Контакты" 
        subtitle="Управление контактами и клиентами"
        actions={
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Добавить контакт
          </Button>
        }
      />
      
      <div className="bg-white rounded-md border shadow-sm">
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск контактов..."
              className="pl-8 w-full md:w-80"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Фильтр
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Имя</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Телефон</TableHead>
                <TableHead>Компания</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="w-[100px]">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost">Просмотр</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case "Клиент":
      return "bg-green-100 text-green-800";
    case "Лид":
      return "bg-blue-100 text-blue-800";
    case "Потенциальный":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
