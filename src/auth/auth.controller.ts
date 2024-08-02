import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';
import { Body, Controller, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';

import { CheckAuthDto } from './dto/auth.check.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  // async login(@Body() CheckAuthDto:any){
  //   console.log("CheckAuthDto",CheckAuthDto)
  //   return this.AuthService.logincheck(CheckAuthDto.email,CheckAuthDto.password);
  // }
  async login(@Request() req:any){
    return this.AuthService.generateToken(req.user)
  }
}
  