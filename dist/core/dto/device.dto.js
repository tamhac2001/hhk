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
exports.DeviceDto = exports.CreateDeviceDto = void 0;
const openapi = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const specifications_dto_1 = require("./specifications.dto");
class CreateDeviceDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { modelNumber: { required: true, type: () => String }, deviceType: { required: true, type: () => Object }, name: { required: true, type: () => String }, manufacturer: { required: true, type: () => Object }, specifications: { required: true, type: () => require("./specifications.dto").SpecificationsDto }, customizableSpecifications: { required: true, type: () => require("./specifications.dto").SpecificationsDto }, stocks: { required: true, type: () => [require("./stock/post-stock.dto").PostStockDto] }, isDefaultOption: { required: true, type: () => Boolean }, defaultOptionID: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "modelNumber", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.DeviceType),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "deviceType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Manufacturer),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "manufacturer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", specifications_dto_1.SpecificationsDto)
], CreateDeviceDto.prototype, "specifications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", specifications_dto_1.SpecificationsDto)
], CreateDeviceDto.prototype, "customizableSpecifications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], CreateDeviceDto.prototype, "stocks", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateDeviceDto.prototype, "isDefaultOption", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "defaultOptionID", void 0);
exports.CreateDeviceDto = CreateDeviceDto;
class DeviceDto extends CreateDeviceDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, modelNumber: { required: true, type: () => String }, deviceType: { required: true, type: () => Object }, name: { required: true, type: () => String }, manufacturer: { required: true, type: () => Object }, specifications: { required: true, type: () => require("./specifications.dto").SpecificationsDto }, stocks: { required: true, type: () => [require("./stock/stock.dto").StockDto] } };
    }
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DeviceDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DeviceDto.prototype, "modelNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DeviceDto.prototype, "deviceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DeviceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DeviceDto.prototype, "manufacturer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", specifications_dto_1.SpecificationsDto)
], DeviceDto.prototype, "specifications", void 0);
__decorate([
    (0, class_validator_1.IsObject)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DeviceDto.prototype, "stocks", void 0);
exports.DeviceDto = DeviceDto;
//# sourceMappingURL=device.dto.js.map