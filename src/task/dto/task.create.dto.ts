export class CreateTaskDto {
  name: string;
  description: string;
  dueDate: Date;
  status: string;
  media?: string;
}