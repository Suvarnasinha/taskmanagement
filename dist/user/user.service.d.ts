import { CreateUserDto } from './dto/user.create.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    get(): Promise<User[]>;
    create(CreateUserDto: CreateUserDto): Promise<void>;
    check(email: string): Promise<User>;
    forgetPass(email: string, password: string): Promise<void>;
}
