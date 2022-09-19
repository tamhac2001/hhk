import { PhoneManufacturer, TabletManufacturer } from '@prisma/client';
import { IsArray, IsEnum, IsNotEmptyObject, IsString } from 'class-validator';
import { BuyOptionsDto } from './buy.options.dto';
import { SpecificationDto } from './specification.dto';

export class TabletDto {
  @IsString()
  readonly code: string;

  @IsEnum(PhoneManufacturer)
  readonly manufacturer: TabletManufacturer;

  @IsString()
  readonly name: string;

  @IsNotEmptyObject()
  readonly specification: SpecificationDto;

  @IsArray()
  readonly buyOptions: Array<BuyOptionsDto>;
}
