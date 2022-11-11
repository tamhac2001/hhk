"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartphoneModule = void 0;
const common_1 = require("@nestjs/common");
const smartphone_service_1 = require("./smartphone.service");
const smartphone_controller_1 = require("./smartphone.controller");
let SmartphoneModule = class SmartphoneModule {
};
SmartphoneModule = __decorate([
    (0, common_1.Module)({
        providers: [smartphone_service_1.SmartphoneService],
        controllers: [smartphone_controller_1.SmartphoneController]
    })
], SmartphoneModule);
exports.SmartphoneModule = SmartphoneModule;
//# sourceMappingURL=smartphone.module.js.map