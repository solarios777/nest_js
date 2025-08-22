"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [
            { id: 1, name: 'A', age: 20, gender: 'Male', isMerried: false, email: 'A@A.com' },
            { id: 2, name: 'B', age: 21, gender: 'Female', isMerried: false, email: 'B@B.com' },
            { id: 3, name: 'C', age: 22, gender: 'Male', isMerried: false, email: 'C@C.com' },
            { id: 4, name: 'D', age: 23, gender: 'Female', isMerried: false, email: 'D@D.com' },
            { id: 5, name: 'E', age: 24, gender: 'Male', isMerried: false, email: 'E@E.com' },
        ];
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    createUser(user) {
        this.users.push(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=users.service.js.map