import { Injectable, Inject, forwardRef} from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UserService {
  constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {}
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMerried: boolean;
    email: string;
    password:string
  }[] = [
    { id: 1, name: 'A', age: 20, gender: 'Male', isMerried: false, email: 'A@A.com',password:'1234' },
    { id: 2, name: 'B', age: 21, gender: 'Female', isMerried: false , email: 'B@B.com',password:'1234'},
    { id: 3, name: 'C', age: 22, gender: 'Male', isMerried: false, email: 'C@C.com' ,password:'1234'},
    { id: 4, name: 'D', age: 23, gender: 'Female', isMerried: false, email: 'D@D.com',password:'1234' },
    { id: 5, name: 'E', age: 24, gender: 'Male', isMerried: false, email: 'E@E.com',password:'1234' },
  ];

  getAllUsers() {
    if(this.authService.isAuthenticated){
      return this.users
    }
      
    else{
      return "You are not authenticated"
    }
    }
    


  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMerried: boolean;
    email: string;
    password:string
  }) {
    this.users.push(user);
  }
}
