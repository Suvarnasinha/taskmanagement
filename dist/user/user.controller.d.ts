import { CreateUserDto } from './dto/user.create.dto';
import { UpdatePassDto } from './dto/user.update.dto';
import { UserService } from './user.service';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    getUser(): Promise<import("./entity/user.entity").User[]>;
    registration(CreateUserDto: CreateUserDto): Promise<void>;
    forgetPass(UpdatePassDto: UpdatePassDto): Promise<void>;
}
