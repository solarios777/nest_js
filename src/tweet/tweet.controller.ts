import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService: TweetService) {}

    @Get(':userId?')
    public GetTweet(@Param('userId',ParseIntPipe) userId: number) {
        return this.tweetService.getAllTweets(userId);
    }
}
