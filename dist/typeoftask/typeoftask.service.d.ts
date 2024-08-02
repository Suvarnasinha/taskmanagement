import { Repository } from 'typeorm';
import { Typeoftask } from './entity/typeoftask.entity';
import { UpdateTypeoftaskDto } from './dto/update-typeoftask.dto';
import { CreateTypeoftaskDto } from './dto/typeoftask.dto';
export declare class TypeoftaskService {
    private typeoftaskRepository;
    constructor(typeoftaskRepository: Repository<Typeoftask>);
    createTypeoftask(CreateTypeoftaskDto: CreateTypeoftaskDto, taskId: number): Promise<Typeoftask>;
    updateTypeoftask(typeoftaskId: number, updateTypeoftaskDto: UpdateTypeoftaskDto): Promise<Typeoftask>;
    deleteTypeoftask(typeoftaskId: number): Promise<void>;
    getTypeoftaskById(typeoftaskId: number): Promise<Typeoftask>;
    getTypeoftasksByTaskId(taskId: number): Promise<Typeoftask[]>;
}
