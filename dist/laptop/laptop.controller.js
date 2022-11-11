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
exports.LaptopController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const dto_1 = require("../core/dto");
const laptop_service_1 = require("./laptop.service");
let LaptopController = class LaptopController {
    constructor(service) {
        this.service = service;
    }
    findLaptops(manufacturer, priceRange, orderByDto, page) {
        return this.service.find(manufacturer, priceRange.minPrice, priceRange.maxPrice, orderByDto.orderBy, page);
    }
    create(dto) {
        return this.service.create(dto);
    }
    update1(dto) {
        return this.service.update(dto);
    }
    update2(dto) {
        return this.service.update(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'manufacturers',
        required: false,
        isArray: true,
        enum: client_1.Manufacturer,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
    }),
    (0, swagger_1.ApiOkResponse)({
        isArray: true,
        type: dto_1.DeviceDto,
    }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)('manufacturers', new common_1.ParseArrayPipe({
        optional: true,
        expectedType: (Array),
        separator: ',',
    }))),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Query)()),
    __param(3, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        dto_1.PriceRangeDto,
        dto_1.OrderByDto, Number]),
    __metadata("design:returntype", void 0)
], LaptopController.prototype, "findLaptops", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.DeviceDto,
    }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDeviceDto]),
    __metadata("design:returntype", void 0)
], LaptopController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update'),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.DeviceDto,
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeviceDto]),
    __metadata("design:returntype", void 0)
], LaptopController.prototype, "update1", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.DeviceDto,
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeviceDto]),
    __metadata("design:returntype", void 0)
], LaptopController.prototype, "update2", null);
LaptopController = __decorate([
    (0, common_1.Controller)('laptops'),
    __metadata("design:paramtypes", [laptop_service_1.LaptopService])
], LaptopController);
exports.LaptopController = LaptopController;
//# sourceMappingURL=laptop.controller.js.map