import { TweetService } from './tweet.service';
export declare class TweetController {
    private tweetService;
    constructor(tweetService: TweetService);
    GetTweet(userId: number): {
        text: String;
        date: Date;
        name: string;
    }[];
}
