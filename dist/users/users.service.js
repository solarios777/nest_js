"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
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
}
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map