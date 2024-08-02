import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task.create.dto';
import { UpdateTaskDto } from './dto/task.update.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    createTask(createTaskDto: CreateTaskDto, req: any): Promise<import("./entity/task.entity").Task>;
    updateTask(taskId: number, updateTaskDto: UpdateTaskDto): Promise<import("./entity/task.entity").Task>;
    deleteTask(req: any, taskId: number): Promise<void>;
    getTaskById(taskId: number): Promise<import("./entity/task.entity").Task>;
    getTasksByUserId(userId: number): Promise<import("./entity/task.entity").Task[]>;
    getTasksByType(type: string, userId: number): Promise<import("./entity/task.entity").Task[]>;
    getToDoTasks(userId: number): Promise<import("./entity/task.entity").Task[]>;
    getInProgressTasks(userId: number): Promise<import("./entity/task.entity").Task[]>;
    getCompletedTasks(userId: number): Promise<import("./entity/task.entity").Task[]>;
    checkDueToday(): Promise<void>;
}
