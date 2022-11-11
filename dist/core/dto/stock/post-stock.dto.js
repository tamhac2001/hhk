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
exports.PostStockDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const color_option_dto_1 = require("../color-option.dto");
class PostStockDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, colorOption: { required: true, type: () => require("../color-option.dto").ColorOptionDto } };
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PostStockDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PostStockDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", color_option_dto_1.ColorOptionDto)
], PostStockDto.prototype, "colorOption", void 0);
exports.PostStockDto = PostStockDto;
//# sourceMappingURL=post-stock.dto.js.map