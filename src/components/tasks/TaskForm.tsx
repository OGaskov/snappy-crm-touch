
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';

interface TaskFormData {
  title: string;
  subject: string;
  assignees: string;
  deadline: string;
  status: "новая" | "в работе" | "завершена" | "отложена";
}

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
}

export function TaskForm({ onSubmit, onCancel }: TaskFormProps) {
  const form = useForm<TaskFormData>({
    defaultValues: {
      title: '',
      subject: '',
      assignees: '',
      deadline: '',
      status: 'новая',
    },
  });

  const handleSubmit = (data: TaskFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">Название задачи</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Введите название задачи" 
                    {...field} 
                    className="border-gray-300 focus:border-primary-500 focus:ring-primary-500 rounded-lg transition-all duration-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">Тема</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Введите тему задачи" 
                    {...field} 
                    className="border-gray-300 focus:border-primary-500 focus:ring-primary-500 rounded-lg transition-all duration-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="assignees"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">Исполнители</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Введите исполнителей через запятую" 
                    {...field} 
                    className="border-gray-300 focus:border-primary-500 focus:ring-primary-500 rounded-lg transition-all duration-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">Срок выполнения</FormLabel>
                <FormControl>
                  <Input 
                    type="date" 
                    {...field} 
                    className="border-gray-300 focus:border-primary-500 focus:ring-primary-500 rounded-lg transition-all duration-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">Статус</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-gray-300 focus:border-primary-500 focus:ring-primary-500 rounded-lg transition-all duration-200">
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
                    <SelectItem value="новая" className="hover:bg-blue-50 focus:bg-blue-50">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Новая
                      </span>
                    </SelectItem>
                    <SelectItem value="в работе" className="hover:bg-orange-50 focus:bg-orange-50">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        В работе
                      </span>
                    </SelectItem>
                    <SelectItem value="завершена" className="hover:bg-green-50 focus:bg-green-50">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Завершена
                      </span>
                    </SelectItem>
                    <SelectItem value="отложена" className="hover:bg-red-50 focus:bg-red-50">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Отложена
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Отмена
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Создать задачу
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
