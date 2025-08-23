import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: {
        email: string;
        password: string;
    }): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    } | "not found";
}
