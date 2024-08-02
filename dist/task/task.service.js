"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./entity/task.entity");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async createTask(createTaskDto, userId) {
        const { name, description, dueDate, status, media } = createTaskDto;
        const task = this.taskRepository.create({
            name,
            description,
            dueDate,
            status,
            media,
            userid: userId,
        });
        return this.taskRepository.save(task);
    }
    async updateTask(taskId, updateTaskDto) {
        const task = await this.taskRepository.findOne({ where: { taskid: taskId } });
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${taskId} not found`);
        }
        Object.assign(task, updateTaskDto);
        return this.taskRepository.save(task);
    }
    async deleteTask(taskId) {
        const result = await this.taskRepository.delete(taskId);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ID ${taskId} not found`);
        }
    }
    async getTaskById(taskId) {
        const task = await this.taskRepository.findOne({ where: { taskid: taskId } });
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${taskId} not found`);
        }
        return task;
    }
    async getTasksByUserId(userId) {
        return this.taskRepository.find({ where: { userid: userId } });
    }
    async getTasksByType(userId, type) {
        return this.taskRepository.createQueryBuilder('task')
            .innerJoinAndSelect('task.typeoftask', 'typeoftask')
            .where('task.userid = :userId', { userId })
            .andWhere('typeoftask.typeoftask = :type', { type })
            .getMany();
    }
    async getTasksByStatus(userId, status) {
        return this.taskRepository.createQueryBuilder('task')
            .where('task.userid = :userId', { userId })
            .andWhere('task.status = :status', { status })
            .getMany();
    }
    async checkDueToday() {
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
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskService);
//# sourceMappingURL=task.service.js.map