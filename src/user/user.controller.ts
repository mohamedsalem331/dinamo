import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';
import { User } from './schema';

@Controller('user')
export class UserController {
  constructor(
    // private userService: UserService
    @InjectModel('user') private userModel: Model<User>
  ) { }

  /**
   * for creating a new user
   * we can implement here any logic before/after user persist like password hash, sending notification, etc.  
   */
  @Post()
  create(@Body() body: UserDto) { }

  /**
   * for updating existing user by id
   */
  @Patch('/:id')
  updateById(@Param('id') id: string, @Body() body: Partial<UserDto>) { }

  /**
   * for fetching existing user by id
   */
  @Get('/:id')
  getById(@Param('id') id: string, @Body() body: UserDto) { }

  /**
   * for authenticating user and generating new auth token
   * we also can add auth guards or interceptors for authorization and security
   */
  @Post('/auth')
  signin(@Body() body: { email: string, password: string }) { }
}
