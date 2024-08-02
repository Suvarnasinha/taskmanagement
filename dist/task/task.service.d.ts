import { Repository } from "typeorm";
import { Task } from "./entity/task.entity";
import { CreateTaskDto } from "./dto/task.create.dto";
import { UpdateTaskDto } from "./dto/task.update.dto";
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    createTask(createTaskDto: CreateTaskDto, userId: number): Promise<Task>;
    updateTask(taskId: number, updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(taskId: number): Promise<void>;
    getTaskById(taskId: number): Promise<Task>;
    getTasksByUserId(userId: number): Promise<Task[]>;
    getTasksByType(userId: number, type: string): Promise<Task[]>;
    getTasksByStatus(userId: number, status: string): Promise<Task[]>;
    checkDueToday(): Promise<void>;
}
