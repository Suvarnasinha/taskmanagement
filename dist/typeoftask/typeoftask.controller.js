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
exports.TypeoftaskController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeoftask_service_1 = require("./typeoftask.service");
const typeoftask_dto_1 = require("./dto/typeoftask.dto");
const update_typeoftask_dto_1 = require("./dto/update-typeoftask.dto");
let TypeoftaskController = class TypeoftaskController {
    constructor(typeoftaskService) {
        this.typeoftaskService = typeoftaskService;
    }
    async createTypeoftask(createTypeoftaskDto, req, taskId) {
        const userId = req.user.id;
        return this.typeoftaskService.createTypeoftask(createTypeoftaskDto, taskId);
    }
    async updateTypeoftask(typeoftaskId, updateTypeoftaskDto) {
        return this.typeoftaskService.updateTypeoftask(typeoftaskId, updateTypeoftaskDto);
    }
    async deleteTypeoftask(typeoftaskId) {
        return this.typeoftaskService.deleteTypeoftask(typeoftaskId);
    }
    async getTypeoftaskById(typeoftaskId) {
        return this.typeoftaskService.getTypeoftaskById(typeoftaskId);
    }
    async getTypeoftasksByTaskId(taskId) {
        return this.typeoftaskService.getTypeoftasksByTaskId(taskId);
    }
};
exports.TypeoftaskController = TypeoftaskController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeoftask_dto_1.CreateTypeoftaskDto, Object, Number]),
    __metadata("design:returntype", Promise)
], TypeoftaskController.prototype, "createTypeoftask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Patch)('/:typeoftaskId'),
    __param(0, (0, common_1.Param)('typeoftaskId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_typeoftask_dto_1.UpdateTypeoftaskDto]),
    __metadata("design:returntype", Promise)
], TypeoftaskController.prototype, "updateTypeoftask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)('/:typeoftaskId'),
    __param(0, (0, common_1.Param)('typeoftaskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeoftaskController.prototype, "deleteTypeoftask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/:typeoftaskId'),
    __param(0, (0, common_1.Param)('typeoftaskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeoftaskController.prototype, "getTypeoftaskById", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/task/:taskId'),
    __param(0, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeoftaskController.prototype, "getTypeoftasksByTaskId", null);
exports.TypeoftaskController = TypeoftaskController = __decorate([
    (0, common_1.Controller)('typeoftask'),
    __metadata("design:paramtypes", [typeoftask_service_1.TypeoftaskService])
], TypeoftaskController);
//# sourceMappingURL=typeoftask.controller.js.map