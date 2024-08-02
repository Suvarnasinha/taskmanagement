import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Typeoftask } from './entity/typeoftask.entity';

import { UpdateTypeoftaskDto } from './dto/update-typeoftask.dto';
import { CreateTypeoftaskDto } from './dto/typeoftask.dto';

@Injectable()
export class TypeoftaskService {
  constructor(
    @InjectRepository(Typeoftask)
    private typeoftaskRepository: Repository<Typeoftask>,
  ) {}

  async createTypeoftask(CreateTypeoftaskDto: CreateTypeoftaskDto, taskId: number): Promise<Typeoftask> {
    const { typeoftask } = CreateTypeoftaskDto;
    const typeoftaskEntity = this.typeoftaskRepository.create({
      typeoftask,
      taskid: taskId,
    });
    return this.typeoftaskRepository.save(typeoftaskEntity);
  }

  async updateTypeoftask(typeoftaskId: number, updateTypeoftaskDto: UpdateTypeoftaskDto): Promise<Typeoftask> {
    const typeoftask = await this.typeoftaskRepository.findOne({ where: { typeoftaskid: typeoftaskId } });
    if (!typeoftask) {
      throw new NotFoundException(`TypeOfTask with ID ${typeoftaskId} not found`);
    }

    Object.assign(typeoftask, updateTypeoftaskDto);
    return this.typeoftaskRepository.save(typeoftask);
  }

  async deleteTypeoftask(typeoftaskId: number): Promise<void> {
    const result = await this.typeoftaskRepository.delete(typeoftaskId);
    if (result.affected === 0) {
      throw new NotFoundException(`TypeOfTask with ID ${typeoftaskId} not found`);
    }
  }

  async getTypeoftaskById(typeoftaskId: number): Promise<Typeoftask> {
    const typeoftask = await this.typeoftaskRepository.findOne({ where: { typeoftaskid: typeoftaskId } });
    if (!typeoftask) {
      throw new NotFoundException(`TypeOfTask with ID ${typeoftaskId} not found`);
    }
    return typeoftask;
  }

  async getTypeoftasksByTaskId(taskId: number): Promise<Typeoftask[]> {
    return this.typeoftaskRepository.find({ where: { taskid: taskId } });
  }
}
