import { UserService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    isAuthenticated: boolean;
    login(email: string, password: string): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    } | "not found";
}
