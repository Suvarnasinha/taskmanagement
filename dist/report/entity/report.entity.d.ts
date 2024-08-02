import { Task } from "src/task/entity/task.entity";
export declare class Report {
    reportid: number;
    taskid: number;
    dueDate: Date;
    filepath: string;
    createdAt: Date;
    updatedAt: Date;
    task: Task[];
}
