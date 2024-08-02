import { Report } from "src/report/entity/report.entity";
import { Typeoftask } from "src/typeoftask/entity/typeoftask.entity";
import { User } from "src/user/entity/user.entity";
export declare class Task {
    taskid: number;
    userid: number;
    name: string;
    description: string;
    dueDate: Date;
    status: string;
    media: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    typeoftask: Typeoftask[];
    report: Report[];
}
