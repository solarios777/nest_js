import { AuthService } from "src/auth/auth.service";
export declare class UserService {
    private readonly authService;
    constructor(authService: AuthService);
    users: {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    }[];
    getAllUsers(): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    }[] | "You are not authenticated";
    getUserById(id: number): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    };
    createUser(user: {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    }): void;
}
