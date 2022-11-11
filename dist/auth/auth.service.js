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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const runtime_1 = require("@prisma/client/runtime");
const argon2 = require("argon2");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async signUp(dto) {
        const hash = (await argon2.hash(dto.password)).trim();
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hash,
                    name: dto.name,
                    phoneNumber: dto.phoneNumber,
                },
            });
            return this.signToken(user.id);
        }
        catch (e) {
            if (e instanceof runtime_1.PrismaClientKnownRequestError) {
                if (e.code === 'P2002')
                    throw new common_1.ForbiddenException('Credential taken');
            }
            throw e;
        }
    }
    async signIn(dto) {
        const user = await this.prisma.user
            .findUniqueOrThrow({
            where: {
                email: dto.email,
            },
        })
            .catch(() => {
            throw new common_1.ForbiddenException('Credential not found');
        });
        const pwMatched = await argon2.verify(user.password, dto.password);
        if (!pwMatched) {
            throw new common_1.ForbiddenException('Credential not found');
        }
        return this.signToken(user.id);
    }
    async signToken(userId) {
        const payload = {
            sub: userId,
        };
        const token = await this.jwt.signAsync(payload, {
            secret: this.config.get('JWT_SECRET'),
            expiresIn: this.config.get('JWT_EXPIRES_IN'),
        });
        return {
            access_token: token,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map