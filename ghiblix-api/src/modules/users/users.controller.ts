import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get() 
  find() {
    const result: Promise<User[]> =  this.userService.findAll();
    console.log(result);
    return result;
  }

  @Post('') 
  @HttpCode(200)
  singnup(@Req() req,@Res() res ) {
    const {email, password} = req.body;

    const user = {email, password};
    const resultado = this.userService.create(user);
  }
}
