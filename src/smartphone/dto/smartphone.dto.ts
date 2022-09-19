import { PhoneManufacturer } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
} from 'class-validator';
import { BuyOptionsDto } from './buy.options.dto';
import { SpecificationDto } from './specification.dto';

export class SmartphoneDto {
  @IsString()
  readonly code: string;

  @IsEnum(PhoneManufacturer)
  readonly manufacture: PhoneManufacturer;

  @IsString()
  readonly name: string;

  @IsNotEmptyObject()
  readonly specification: SpecificationDto;

  @IsArray()
  readonly buyOptions: Array<BuyOptionsDto>;
}
