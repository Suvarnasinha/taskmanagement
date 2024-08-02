
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckAuthDto } from './dto/auth.check.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({usernameField: 'email',
    passwordField: 'password'});
  }

  async validate(email:string,password:string): Promise<any> {
    console.log("passport",email)
    const user = await this.authService.logincheck(email,password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
