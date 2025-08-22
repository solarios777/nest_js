import { UserService } from 'src/users/users.service';
export declare class TweetService {
    private readonly UserService;
    constructor(UserService: UserService);
    tweet: {
        text: String;
        date: Date;
        userId: Number;
    }[];
    getAllTweets(userId: number): {
        text: String;
        date: Date;
        name: string;
    }[];
}
