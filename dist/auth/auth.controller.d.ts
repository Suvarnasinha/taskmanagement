import { AuthService } from './auth.service';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
}
