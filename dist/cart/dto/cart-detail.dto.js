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
exports.UpdateCartDetailDto = exports.DeleteCartDetailDto = exports.PostCartDetailDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PostCartDetailDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], PostCartDetailDto.prototype, "deviceID", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], PostCartDetailDto.prototype, "stockID", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], PostCartDetailDto.prototype, "quantity", void 0);
exports.PostCartDetailDto = PostCartDetailDto;
class DeleteCartDetailDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], DeleteCartDetailDto.prototype, "id", void 0);
exports.DeleteCartDetailDto = DeleteCartDetailDto;
class UpdateCartDetailDto extends DeleteCartDetailDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], UpdateCartDetailDto.prototype, "quantity", void 0);
exports.UpdateCartDetailDto = UpdateCartDetailDto;
//# sourceMappingURL=cart-detail.dto.js.map