"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeoftaskModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeoftask_controller_1 = require("./typeoftask.controller");
const typeoftask_service_1 = require("./typeoftask.service");
const typeoftask_entity_1 = require("./entity/typeoftask.entity");
let TypeoftaskModule = class TypeoftaskModule {
};
exports.TypeoftaskModule = TypeoftaskModule;
exports.TypeoftaskModule = TypeoftaskModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([typeoftask_entity_1.Typeoftask])],
        controllers: [typeoftask_controller_1.TypeoftaskController],
        providers: [typeoftask_service_1.TypeoftaskService],
    })
], TypeoftaskModule);
//# sourceMappingURL=typeoftask.module.js.map