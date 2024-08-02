import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { TaskModule } from './task/task.module';
import { TypeoftaskModule } from './typeoftask/typeoftask.module';
import { ReportModule } from './report/report.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { Task } from './task/entity/task.entity';
import { Typeoftask } from './typeoftask/entity/typeoftask.entity';
import { Report } from './report/entity/report.entity';



@Module({
  imports: [UserModule, TaskModule, TypeoftaskModule, ReportModule, AuthModule,
     TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Sss@1502',
    database: 'taskmanagement',
    entities: [User,Task,Typeoftask,Report],
    synchronize: true,
  }),

],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
