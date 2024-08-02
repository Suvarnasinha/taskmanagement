import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private UserService;
    private jwtService;
    constructor(UserService: UserService, jwtService: JwtService);
    logincheck(email: string, password: string): Promise<import("../user/entity/user.entity").User>;
    generateToken(user: any): Promise<{
        access_token: string;
    }>;
}
