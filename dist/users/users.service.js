"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
let UserService = class UserService {
    constructor(authService) {
        this.authService = authService;
        this.users = [
            { id: 1, name: 'A', age: 20, gender: 'Male', isMerried: false, email: 'A@A.com', password: '1234' },
            { id: 2, name: 'B', age: 21, gender: 'Female', isMerried: false, email: 'B@B.com', password: '1234' },
            { id: 3, name: 'C', age: 22, gender: 'Male', isMerried: false, email: 'C@C.com', password: '1234' },
            { id: 4, name: 'D', age: 23, gender: 'Female', isMerried: false, email: 'D@D.com', password: '1234' },
            { id: 5, name: 'E', age: 24, gender: 'Male', isMerried: false, email: 'E@E.com', password: '1234' },
        ];
    }
    getAllUsers() {
        if (this.authService.isAuthenticated) {
            return this.users;
        }
        else {
            return "You are not authenticated";
        }
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
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], UserService);
//# sourceMappingURL=users.service.js.map