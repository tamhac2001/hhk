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
exports.OrderByDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
class OrderByDto {
    constructor() {
        this.orderBy = enums_1.OrderBy.DateAsc;
    }
}
__decorate([
    (0, class_transformer_1.Expose)({
        name: 'order-by',
        toPlainOnly: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === 'total')
            return enums_1.OrderBy.Total;
        else if (value === 'date-desc')
            return enums_1.OrderBy.DateDesc;
        return enums_1.OrderBy.DateAsc;
    }),
    __metadata("design:type", String)
], OrderByDto.prototype, "orderBy", void 0);
exports.OrderByDto = OrderByDto;
//# sourceMappingURL=order-by.dto.js.map