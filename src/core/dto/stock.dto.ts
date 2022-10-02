import {
  IsInt,
  IsMongoId,
  IsNotEmptyObject,
  IsOptional
} from 'class-validator';
import { ColorOptionDto } from './color-option.dto';

export class PostStockDto {
  @IsInt()
  readonly price: number;

  @IsInt()
  readonly quantity: number;

  @IsNotEmptyObject()
  readonly colorOption: ColorOptionDto;
}

export class StockDto extends PostStockDto {
  @IsMongoId()
  readonly id: string;

  @IsNotEmptyObject()
  @IsOptional()
  readonly colorOption: ColorOptionDto;
}
