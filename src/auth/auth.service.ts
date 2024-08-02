import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CheckAuthDto } from './dto/auth.check.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private UserService: UserService,
    private jwtService:JwtService) {}
  async logincheck(email:string,password:string){
   
        const emailCheck =await this.UserService.check(email)
        console.log("datadatadatadatdatadat",emailCheck)
          if(!emailCheck){
        throw new UnauthorizedException('Wrong Credentials');
      }
        const passwordMatch=await bcrypt.compare(password,emailCheck.password)
        if(!passwordMatch){
        throw new UnauthorizedException('Wrong Credentials');
        }
        return emailCheck
     
  }


  async generateToken(user:any){
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}