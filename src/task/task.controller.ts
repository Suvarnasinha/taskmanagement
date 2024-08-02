import { TaskService } from './task.service';
import { Body, Controller, Get, Post, Patch, Delete, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from './dto/task.create.dto';
import { UpdateTaskDto } from './dto/task.update.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto, @Request() req: any) {
    const userId = req.user.id; // Accessing the user ID
    return this.taskService.createTask(createTaskDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:taskId')
  async updateTask(
    @Param('taskId') taskId: number, // Extracting taskId from route parameter
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(taskId, updateTaskDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:taskId')
  async deleteTask(@Request() req: any, @Body('taskId') taskId: number) {
    const userId = req.user.id; // Accessing the user ID
    return this.taskService.deleteTask(taskId);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/:taskId')
  async getTaskById(@Param('taskId') taskId: number) {
    return this.taskService.getTaskById(taskId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/user/:userId')
  async getTasksByUserId(@Param('userId') userId: number) {
    return this.taskService.getTasksByUserId(userId);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get(':type')
  getTasksByType(@Param('type') type: string, @Param('userId') userId: number) {
    return this.taskService.getTasksByType(userId, type);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('status/to-do/:userId')
  getToDoTasks(@Param('userId') userId: number) {
    return this.taskService.getTasksByStatus(userId, 'to-do');
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('status/in-progress/:userId')
  getInProgressTasks(@Param('userId') userId: number) {
    return this.taskService.getTasksByStatus(userId, 'in-progress');
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('status/completed/:userId')
  getCompletedTasks(@Param('userId') userId: number) {
    return this.taskService.getTasksByStatus(userId, 'completed');
  }
  

  // @UseGuards(AuthGuard('jwt'))
  // @Get('due-today/:userId')
  // checkDueTasksToday(@Param('userId') userId: number) {
  //   return this.taskService.checkDueTasksToday(userId);
  // }
  @UseGuards(AuthGuard('jwt'))
  @Get('due-today')
  checkDueToday() {
    return this.taskService.checkDueToday();
  }
}