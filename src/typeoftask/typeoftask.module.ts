import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeoftaskController } from './typeoftask.controller';
import { TypeoftaskService } from './typeoftask.service';
import { Typeoftask } from './entity/typeoftask.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Typeoftask])],  
  controllers: [TypeoftaskController],
  providers: [TypeoftaskService],
})
export class TypeoftaskModule {}
