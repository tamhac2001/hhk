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
exports.StockDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const color_option_dto_1 = require("../color-option.dto");
const post_stock_dto_1 = require("./post-stock.dto");
class StockDto extends post_stock_dto_1.PostStockDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, colorOption: { required: true, type: () => require("../color-option.dto").ColorOptionDto } };
    }
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], StockDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", color_option_dto_1.ColorOptionDto)
], StockDto.prototype, "colorOption", void 0);
exports.StockDto = StockDto;
//# sourceMappingURL=stock.dto.js.map