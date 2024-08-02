import { CreateUserDto } from './dto/user.create.dto';
import { UpdatePassDto } from './dto/user.update.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Patch, Post, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
 @Get()
  getUser() {
    return this.UserService.get();
  }
  @Post()
  async registration(@Body() CreateUserDto:CreateUserDto){
    console.log("createUserDto",CreateUserDto)
    return this.UserService.create(CreateUserDto);
  }
  @Patch('/forgetPass')
  async forgetPass(@Body() UpdatePassDto:UpdatePassDto){
   const emailFor=UpdatePassDto.email;
   const passwordFor=UpdatePassDto.password
     this.UserService.forgetPass(emailFor,passwordFor)
  }
}
