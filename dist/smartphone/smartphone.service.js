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
exports.SmartphoneService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../core/enums");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../utils");
let SmartphoneService = class SmartphoneService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async find(manufacturer, minPrice, maxPrice, orderBy, page) {
        console.log('manufacturer:' + manufacturer);
        console.log('min-price:' + minPrice);
        console.log('max-price:' + maxPrice);
        console.log('orderBy:' + orderBy);
        console.log('page:' + page.toString());
        const displayedDevicePerPage = 20;
        const smartphones = await this.prisma.device.findMany({
            where: {
                deviceType: {
                    equals: 'smartphone',
                },
                manufacturer: manufacturer
                    ? {
                        in: manufacturer,
                    }
                    : {},
                stocks: {
                    some: {
                        price: {
                            gte: minPrice,
                            lte: maxPrice,
                        },
                    },
                },
                isDefaultOption: true,
            },
            skip: displayedDevicePerPage * (page - 1),
            take: displayedDevicePerPage,
            include: {
                stocks: {
                    select: {
                        id: true,
                        colorOption: {
                            select: {
                                id: true,
                                color: true,
                                imageUrls: true,
                            },
                        },
                        price: true,
                        quantity: true,
                    },
                },
                otherOptions: {
                    include: {
                        stocks: {
                            select: {
                                id: true,
                                colorOption: {
                                    select: {
                                        id: true,
                                        color: true,
                                        imageUrls: true,
                                    },
                                },
                                price: true,
                                quantity: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        inOrderDetails: true,
                        inCartDetails: true,
                    },
                },
            },
        });
        console.log(smartphones.length);
        if (orderBy === enums_1.OrderBy.PriceAcs) {
            smartphones.sort((a, b) => a.stocks.at(0).price - b.stocks.at(0).price);
        }
        else if (orderBy === enums_1.OrderBy.PriceDesc) {
            smartphones
                .sort((a, b) => a.stocks.at(0).price - b.stocks.at(0).price)
                .reverse();
        }
        else {
            smartphones.sort((a, b) => a._count.inCartDetails +
                a._count.inOrderDetails -
                (b._count.inCartDetails + b._count.inOrderDetails));
        }
        smartphones.forEach((smartphone) => delete smartphone._count);
        (0, utils_1.cleanObject)(smartphones);
        return smartphones;
    }
    async create(dto) {
        return await this.prisma.device.create({
            data: {
                modelNumber: dto.modelNumber,
                deviceType: dto.deviceType,
                manufacturer: dto.manufacturer,
                name: dto.name,
                specifications: dto.specifications,
                customizableSpecifications: dto.customizableSpecifications,
                isDefaultOption: dto.isDefaultOption,
                defaultOptionID: dto.defaultOptionID,
                stocks: {
                    create: dto.stocks.map((stock) => {
                        return {
                            price: stock.price,
                            quantity: stock.quantity,
                            colorOption: stock.colorOption.id
                                ? {
                                    connect: {
                                        id: stock.colorOption.id,
                                    },
                                }
                                : {
                                    create: {
                                        color: stock.colorOption.color,
                                        imageUrls: stock.colorOption.imageUrls,
                                    },
                                },
                        };
                    }),
                },
            },
            include: {
                stocks: {
                    select: {
                        id: true,
                        colorOption: {
                            select: {
                                id: true,
                                color: true,
                                imageUrls: true,
                            },
                        },
                        price: true,
                        quantity: true,
                    },
                },
            },
        });
    }
    async update(dto) {
        return await this.prisma.device.update({
            where: {
                id: dto.id,
            },
            data: {
                modelNumber: dto.modelNumber,
                name: dto.name,
                manufacturer: dto.manufacturer,
                specifications: dto.specifications,
                customizableSpecifications: dto.customizableSpecifications,
                stocks: {
                    update: dto.stocks.map((stock) => {
                        return {
                            where: {
                                id: stock.id,
                            },
                            data: {
                                price: stock.price,
                                quantity: stock.quantity,
                                colorOption: {
                                    update: {
                                        imageUrls: {
                                            set: stock.colorOption.imageUrls,
                                        },
                                    },
                                },
                            },
                        };
                    }),
                },
                isDefaultOption: dto.isDefaultOption,
                defaultOptionID: dto.defaultOptionID,
            },
            include: {
                stocks: {
                    select: {
                        id: true,
                        colorOption: {
                            select: {
                                id: true,
                                color: true,
                                imageUrls: true,
                            },
                        },
                        price: true,
                        quantity: true,
                    },
                },
            },
        });
    }
};
SmartphoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SmartphoneService);
exports.SmartphoneService = SmartphoneService;
//# sourceMappingURL=smartphone.service.js.map