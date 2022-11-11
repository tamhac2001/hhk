"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEntity = void 0;
const openapi = require("@nestjs/swagger");
class DeviceEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, modelNumber: { required: true, type: () => String }, deviceType: { required: true, type: () => Object }, name: { required: true, type: () => String }, manufacturer: { required: true, type: () => Object }, specifications: { required: true, type: () => Object }, customizableSpecifications: { required: true, type: () => Object }, isDefaultOption: { required: true, type: () => Boolean }, defaultOptionID: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.DeviceEntity = DeviceEntity;
//# sourceMappingURL=device.entity.js.map