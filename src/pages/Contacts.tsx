
import { PageTitle } from "@/components/layout/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Filter } from "lucide-react";

const contacts = [
  { id: 1, name: "John Smith", email: "john@example.com", phone: "+1 234 567 890", company: "ABC Corp", status: "Customer" },
  { id: 2, name: "Anna Johnson", email: "anna@example.com", phone: "+1 234 567 891", company: "XYZ Inc", status: "Lead" },
  { id: 3, name: "Robert Davis", email: "robert@example.com", phone: "+1 234 567 892", company: "123 LLC", status: "Customer" },
  { id: 4, name: "Emily Wilson", email: "emily@example.com", phone: "+1 234 567 893", company: "Tech Co", status: "Prospect" },
  { id: 5, name: "Michael Brown", email: "michael@example.com", phone: "+1 234 567 894", company: "ABC Corp", status: "Customer" },
  { id: 6, name: "Sarah Miller", email: "sarah@example.com", phone: "+1 234 567 895", company: "Design Studio", status: "Lead" },
  { id: 7, name: "David Garcia", email: "david@example.com", phone: "+1 234 567 896", company: "Sales Pro", status: "Prospect" },
  { id: 8, name: "Lisa Chen", email: "lisa@example.com", phone: "+1 234 567 897", company: "Marketing Inc", status: "Customer" },
];

export default function Contacts() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Contacts" 
        subtitle="Manage your contacts and customers"
        actions={
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        }
      />
      
      <div className="bg-white rounded-md border shadow-sm">
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search contacts..."
              className="pl-8 w-full md:w-80"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
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
                    <Button size="sm" variant="ghost">View</Button>
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
    case "Customer":
      return "bg-green-100 text-green-800";
    case "Lead":
      return "bg-blue-100 text-blue-800";
    case "Prospect":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
