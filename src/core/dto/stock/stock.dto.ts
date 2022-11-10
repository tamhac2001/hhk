import { IsMongoId, IsNotEmptyObject, IsOptional } from 'class-validator';
import { ColorOptionDto } from '../color-option.dto';
import { PostStockDto } from './post-stock.dto';

export class StockDto extends PostStockDto {
  @IsMongoId()
  readonly id: string;

  @IsNotEmptyObject()
  @IsOptional()
  readonly colorOption: ColorOptionDto;
}
