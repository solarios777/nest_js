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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
let TweetService = class TweetService {
    constructor(UserService) {
        this.UserService = UserService;
        this.tweet = [
            { text: 'some tweet', date: new Date('2025-8-2'), userId: 1 },
            { text: 'some other tweet', date: new Date('2025-6-7'), userId: 2 },
            { text: 'some more tweet', date: new Date('2025-8-9'), userId: 3 }
        ];
    }
    getAllTweets(userId) {
        const user = this.UserService.getUserById(userId);
        const tweet = this.tweet.filter((tweet) => tweet.userId === userId);
        const tweetsWithUser = tweet.map((tweet) => {
            return {
                text: tweet.text,
                date: tweet.date,
                name: user.name,
            };
        });
        return tweetsWithUser;
    }
};
exports.TweetService = TweetService;
exports.TweetService = TweetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService])
], TweetService);
//# sourceMappingURL=tweet.service.js.map