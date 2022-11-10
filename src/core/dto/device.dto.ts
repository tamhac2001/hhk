import { DeviceType, Manufacturer } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { SpecificationsDto } from './specifications.dto';
import { PostStockDto } from './stock/post-stock.dto';
import { StockDto } from './stock/stock.dto';

export class CreateDeviceDto {
  @IsString()
  readonly modelNumber: string;

  @IsEnum(DeviceType)
  readonly deviceType: DeviceType;

  @IsString()
  readonly name: string;

  @IsEnum(Manufacturer)
  readonly manufacturer: Manufacturer;

  @IsNotEmptyObject()
  readonly specifications: SpecificationsDto;

  @IsOptional()
  @IsNotEmptyObject()
  readonly customizableSpecifications: SpecificationsDto;

  @IsOptional()
  @IsObject({ each: true })
  readonly stocks: Array<PostStockDto>;

  @IsBoolean()
  @IsOptional()
  readonly isDefaultOption: boolean;

  @IsString()
  @IsOptional()
  readonly defaultOptionID: string;
}

export class DeviceDto extends CreateDeviceDto {
  @IsMongoId()
  @IsOptional()
  readonly id: string;

  @IsOptional()
  readonly modelNumber: string;

  @IsOptional()
  readonly deviceType: DeviceType;

  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly manufacturer: Manufacturer;

  @IsOptional()
  readonly specifications: SpecificationsDto;

  @IsObject({ each: true })
  @IsOptional()
  readonly stocks: Array<StockDto>;
}
