import { CreateUserDto } from './dto/user.create.dto';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';
import { CheckAuthDto } from 'src/auth/dto/auth.check.dto';
import { UpdatePassDto } from './dto/user.update.dto';
const saltOrRounds = 5;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }
  get(): Promise<User[]> {
    return this.userRepository.find();
  }
  async create(CreateUserDto: CreateUserDto) {
    const { name, email, password } = CreateUserDto
    const emailInUse = await this.userRepository.findOne({ where: { email } })
    if (emailInUse) {
      throw new BadRequestException('Email already Exist')
    } else {
      let password = CreateUserDto.password
      let salt = await bcrypt.genSalt(saltOrRounds);
      let hash = await bcrypt.hash(password, salt)
      CreateUserDto.password = hash
      await this.userRepository.save({
        name,email,password:hash
      })
    }
  }

  async check(email:string){
    return this.userRepository.findOne({ where: { email } })
  }

  async forgetPass(email: string, password: string) {
    console.log(email, password);
    const user = await this.userRepository.findOne({ where: { email } });
    console.log(user);
  
    if (!user) {
      throw new UnauthorizedException('Wrong Credentials');
    }
  
    const salt = await bcrypt.genSalt(saltOrRounds);
    const hash = await bcrypt.hash(password, salt);
    console.log("email:", email);
    console.log("password:", hash);

    await this.userRepository.update(user.id, { password: hash });
  }
  
}