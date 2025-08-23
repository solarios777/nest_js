import { UserService } from './users.service';
import { CreateUserDtos } from './dtos/create-user.dto';
import { UpdateUserDtos } from './dtos/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    getUser(limit: number, page: number): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    }[] | "You are not authenticated";
    getUserById(id: any): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
        password: string;
    };
    createUser(user: CreateUserDtos): string;
    updateUser(user: UpdateUserDtos): string;
}
