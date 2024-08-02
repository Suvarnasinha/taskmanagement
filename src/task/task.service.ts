// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateTaskDto } from './dto/task.create.dto';
// import { UpdateTaskDto } from './dto/task.update.dto';
// import { Task } from './entity/task.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./entity/task.entity";
import { CreateTaskDto } from "./dto/task.create.dto";
import { UpdateTaskDto } from "./dto/task.update.dto";

// @Injectable()
// export class TaskService {
//   constructor(
//     @InjectRepository(Task)
//     private taskRepository: Repository<Task>,
//   ) {}

//   async createTask(createTaskDto: CreateTaskDto, userId: number): Promise<Task> {
//     const { name, description, dueDate, status, media } = createTaskDto;
//     const task = this.taskRepository.create({
//       name,
//       description,
//       dueDate,
//       status,
//       media,
//       userid: userId,
//     });
//     return this.taskRepository.save(task);
//   }

//   async updateTask(taskId: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
//     const task = await this.taskRepository.findOne({ where: { taskid: taskId } });
//     if (!task) {
//       throw new NotFoundException(`Task with ID ${taskId} not found`);
//     }

//     Object.assign(task, updateTaskDto);
//     return this.taskRepository.save(task);
//   }

//   async deleteTask(taskId: number): Promise<void> {
//     const result = await this.taskRepository.delete(taskId);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Task with ID ${taskId} not found`);
//     }
//   }

//   async getTaskById(taskId: number): Promise<Task> {
//     const task = await this.taskRepository.findOne({ where: { taskid: taskId } });
//     if (!task) {
//       throw new NotFoundException(`Task with ID ${taskId} not found`);
//     }
//     return task;
//   }
// }
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto, userId: number): Promise<Task> {
    const { name, description, dueDate, status, media } = createTaskDto;
    const task = this.taskRepository.create({
      name,
      description,
      dueDate,
      status,
      media,
      userid: userId, // Assigning the user ID
    });
    return this.taskRepository.save(task);
  }

  async updateTask(taskId: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { taskid: taskId } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }

    Object.assign(task, updateTaskDto);
    return this.taskRepository.save(task);
  }

  async deleteTask(taskId: number): Promise<void> {
    const result = await this.taskRepository.delete(taskId);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }
  }

  async getTaskById(taskId: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { taskid: taskId } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }
    return task;
  }

  async getTasksByUserId(userId: number): Promise<Task[]> {
    return this.taskRepository.find({ where: { userid: userId } });
  }


  async getTasksByType(userId: number, type: string): Promise<Task[]> {
    return this.taskRepository.createQueryBuilder('task')
      .innerJoinAndSelect('task.typeoftask', 'typeoftask')
      .where('task.userid = :userId', { userId })
      .andWhere('typeoftask.typeoftask = :type', { type })
      .getMany();
  }


  async getTasksByStatus(userId: number, status: string): Promise<Task[]> {
    return this.taskRepository.createQueryBuilder('task')
      .where('task.userid = :userId', { userId })
      .andWhere('task.status = :status', { status })
      .getMany();
  }


  // async checkDueTasksToday(userId: number): Promise<void> {
  //   const today = moment().startOf('day').toDate();
  //   const tomorrow = moment(today).add(1, 'days').toDate();

  //   const dueTodayTasks = await this.taskRepository.createQueryBuilder('task')
  //     .where('task.userid = :userId', { userId })
  //     .andWhere('task.dueDate >= :today AND task.dueDate < :tomorrow', { today, tomorrow })
  //     .getMany();

  //   if (dueTodayTasks.length > 0) {
  //     console.log(`User ${userId} has tasks due today.`);
  //     dueTodayTasks.forEach(task => {
  //       console.log(`Task ID: ${task.id}, Name: ${task.name}`);
  //     });
  //   } else {
  //     console.log(`User ${userId} has no tasks due today.`);
  //   }
  // }

  async checkDueToday(): Promise<void> {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const tasks = await this.taskRepository.createQueryBuilder('task')
      .where('task.dueDate BETWEEN :startOfDay AND :endOfDay', { startOfDay, endOfDay })
      .getMany();

    tasks.forEach(task => {
      console.log(`Task "${task.name}" is due today.`);
    });
  }
  
}
