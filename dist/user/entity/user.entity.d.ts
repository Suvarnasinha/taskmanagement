import { Task } from "src/task/entity/task.entity";
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    task: Task[];
}
