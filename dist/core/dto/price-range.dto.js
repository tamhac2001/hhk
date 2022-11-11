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
exports.PriceRangeDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PriceRangeDto {
    constructor() {
        this.minPrice = 0;
        this.maxPrice = Number.MAX_SAFE_INTEGER;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { minPrice: { required: false, type: () => Number, default: 0 }, maxPrice: { required: false, type: () => Number, default: Number.MAX_SAFE_INTEGER } };
    }
}
__decorate([
    (0, class_transformer_1.Expose)({
        name: 'min-price',
        toPlainOnly: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], PriceRangeDto.prototype, "minPrice", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        name: 'max-price',
        toPlainOnly: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], PriceRangeDto.prototype, "maxPrice", void 0);
exports.PriceRangeDto = PriceRangeDto;
//# sourceMappingURL=price-range.dto.js.map