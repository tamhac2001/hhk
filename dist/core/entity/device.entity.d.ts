import { CustomizableSpecifications, Device, DeviceType, Manufacturer, Specifications } from '@prisma/client';
export declare class DeviceEntity implements Device {
    id: string;
    modelNumber: string;
    deviceType: DeviceType;
    name: string;
    manufacturer: Manufacturer;
    specifications: Specifications;
    customizableSpecifications: CustomizableSpecifications;
    isDefaultOption: boolean;
    defaultOptionID: string;
    createdAt: Date;
    updatedAt: Date;
}
