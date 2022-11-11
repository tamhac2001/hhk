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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../utils");
let CartService = class CartService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findCart(userID) {
        const cart = await this.prisma.cart.findUnique({
            where: {
                id: userID,
            },
            include: {
                cartDetails: {
                    include: {
                        device: {
                            include: {
                                stocks: {
                                    include: {
                                        colorOption: true,
                                    },
                                },
                            },
                        },
                    },
                    orderBy: {
                        updatedAt: 'desc',
                    },
                },
            },
        });
        (0, utils_1.cleanObject)(cart);
        return cart;
    }
    async addToCart(userID, dto) {
        const cart = await this.prisma.cart.upsert({
            where: {
                id: userID,
            },
            create: {
                id: userID,
                cartDetails: {
                    create: {
                        deviceID: dto.deviceID,
                        stockID: dto.stockID,
                        quantity: dto.quantity,
                    },
                },
            },
            update: {},
            include: {
                cartDetails: true,
            },
        });
        const cartDetail = cart.cartDetails.find((cartDetail) => cartDetail.deviceID === dto.deviceID &&
            cartDetail.stockID === dto.stockID);
        if (cartDetail) {
            return await this.prisma.cart.update({
                where: {
                    id: userID,
                },
                data: {
                    cartDetails: {
                        update: {
                            where: {
                                id: cartDetail.id,
                            },
                            data: {
                                quantity: cartDetail.quantity + 1,
                            },
                        },
                    },
                },
                include: {
                    cartDetails: {
                        where: {
                            id: cartDetail.id,
                        },
                        include: {
                            device: {
                                include: {
                                    stocks: {
                                        where: {
                                            id: dto.stockID,
                                        },
                                        include: {
                                            colorOption: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
        }
        else {
            return await this.prisma.cart.update({
                where: {
                    id: userID,
                },
                data: {
                    cartDetails: {
                        create: {
                            deviceID: dto.deviceID,
                            stockID: dto.stockID,
                            quantity: dto.quantity,
                        },
                    },
                },
                include: {
                    cartDetails: {
                        where: {
                            deviceID: dto.deviceID,
                            stockID: dto.stockID,
                        },
                        include: {
                            device: {
                                include: {
                                    stocks: {
                                        where: {
                                            id: dto.stockID,
                                        },
                                        include: {
                                            colorOption: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
        }
    }
    async updateCartDetail(dto) {
        return await this.prisma.cartDetail.update({
            where: {
                id: dto.id,
            },
            data: {
                quantity: dto.quantity,
            },
        });
    }
    async deleteFromCart(dto) {
        await this.prisma.cartDetail.delete({
            where: {
                id: dto.id,
            },
        });
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map