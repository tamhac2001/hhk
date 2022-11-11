"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopModule = void 0;
const common_1 = require("@nestjs/common");
const laptop_service_1 = require("./laptop.service");
const laptop_controller_1 = require("./laptop.controller");
let LaptopModule = class LaptopModule {
};
LaptopModule = __decorate([
    (0, common_1.Module)({
        providers: [laptop_service_1.LaptopService],
        controllers: [laptop_controller_1.LaptopController]
    })
], LaptopModule);
exports.LaptopModule = LaptopModule;
//# sourceMappingURL=laptop.module.js.map