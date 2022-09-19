import { LaptopManufacturer } from '@prisma/client';
import { IsArray, IsEnum, IsNotEmptyObject, IsString } from 'class-validator';
import { BuyOptionsDto } from './buy.options.dto';
import { SpecificationDto } from './specification.dto';

export class LaptopDto {
  @IsString()
  readonly code: string;

  @IsEnum(LaptopManufacturer)
  readonly manufacturer: LaptopManufacturer;

  @IsString()
  readonly name: string;

  @IsNotEmptyObject()
  readonly specification: SpecificationDto;

  @IsArray()
  readonly buyOptions: Array<BuyOptionsDto>;
}
