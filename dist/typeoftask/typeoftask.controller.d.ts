import { TypeoftaskService } from './typeoftask.service';
import { CreateTypeoftaskDto } from './dto/typeoftask.dto';
import { UpdateTypeoftaskDto } from './dto/update-typeoftask.dto';
export declare class TypeoftaskController {
    private typeoftaskService;
    constructor(typeoftaskService: TypeoftaskService);
    createTypeoftask(createTypeoftaskDto: CreateTypeoftaskDto, req: any, taskId: number): Promise<import("./entity/typeoftask.entity").Typeoftask>;
    updateTypeoftask(typeoftaskId: number, updateTypeoftaskDto: UpdateTypeoftaskDto): Promise<import("./entity/typeoftask.entity").Typeoftask>;
    deleteTypeoftask(typeoftaskId: number): Promise<void>;
    getTypeoftaskById(typeoftaskId: number): Promise<import("./entity/typeoftask.entity").Typeoftask>;
    getTypeoftasksByTaskId(taskId: number): Promise<import("./entity/typeoftask.entity").Typeoftask[]>;
}
