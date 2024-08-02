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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
const bcrypt = require("bcrypt");
const saltOrRounds = 5;
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    get() {
        return this.userRepository.find();
    }
    async create(CreateUserDto) {
        const { name, email, password } = CreateUserDto;
        const emailInUse = await this.userRepository.findOne({ where: { email } });
        if (emailInUse) {
            throw new common_1.BadRequestException('Email already Exist');
        }
        else {
            let password = CreateUserDto.password;
            let salt = await bcrypt.genSalt(saltOrRounds);
            let hash = await bcrypt.hash(password, salt);
            CreateUserDto.password = hash;
            await this.userRepository.save({
                name, email, password: hash
            });
        }
    }
    async check(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async forgetPass(email, password) {
        console.log(email, password);
        const user = await this.userRepository.findOne({ where: { email } });
        console.log(user);
        if (!user) {
            throw new common_1.UnauthorizedException('Wrong Credentials');
        }
        const salt = await bcrypt.genSalt(saltOrRounds);
        const hash = await bcrypt.hash(password, salt);
        console.log("email:", email);
        console.log("password:", hash);
        await this.userRepository.update(user.id, { password: hash });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map