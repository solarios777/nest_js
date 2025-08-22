import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query,ValidationPipe } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDtos } from './dtos/create-user.dto';
import { UpdateUserDtos } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @Get()
  getUser(@Query('limit', new DefaultValuePipe(3), ParseIntPipe) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
   
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id',ParseIntPipe) id: any) {

    return this.userService.getUserById(id);
  }
  @Post()
  createUser(@Body() user:CreateUserDtos) {
    
    console.log(user);
    this.userService.createUser(user);
    return 'success';
  }

  @Patch()
  updateUser(@Body() user:UpdateUserDtos) {
    
    console.log(user);
    return 'update success';
    
  }
}
