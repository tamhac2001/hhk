import { DeviceType, Manufacturer } from '@prisma/client';
import { SpecificationsDto } from './specifications.dto';
import { PostStockDto } from './stock/post-stock.dto';
import { StockDto } from './stock/stock.dto';
export declare class CreateDeviceDto {
    readonly modelNumber: string;
    readonly deviceType: DeviceType;
    readonly name: string;
    readonly manufacturer: Manufacturer;
    readonly specifications: SpecificationsDto;
    readonly customizableSpecifications: SpecificationsDto;
    readonly stocks: Array<PostStockDto>;
    readonly isDefaultOption: boolean;
    readonly defaultOptionID: string;
}
export declare class DeviceDto extends CreateDeviceDto {
    readonly id: string;
    readonly modelNumber: string;
    readonly deviceType: DeviceType;
    readonly name: string;
    readonly manufacturer: Manufacturer;
    readonly specifications: SpecificationsDto;
    readonly stocks: Array<StockDto>;
}
