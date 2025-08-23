import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UserService)) private readonly userService: UserService) {}
    isAuthenticated: boolean = false;
    login(email: string, password: string) {
        const user= this.userService.users.find((user) => user.email === email && user.password === password);
        if (user) {
            this.isAuthenticated = true;
            return user;
        }
        return "not found";
    }
}
