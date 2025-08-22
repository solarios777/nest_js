import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly UserService:UserService){}
    tweet: {text:String, date:Date, userId:Number}[]=
    [
      {text:'some tweet', date: new Date('2025-8-2'), userId:1},
      {text:'some other tweet', date: new Date('2025-6-7'), userId:2},
      {text:'some more tweet', date: new Date('2025-8-9'), userId:3}
    ]

    getAllTweets(userId: number) {
        const user=this.UserService.getUserById(userId)
        const tweet= this.tweet.filter((tweet) => tweet.userId === userId);
        const tweetsWithUser = tweet.map((tweet) => {
          return{
          text:tweet.text,
          date:tweet.date,
          name:user.name,
    }})
    return tweetsWithUser
    }
}
