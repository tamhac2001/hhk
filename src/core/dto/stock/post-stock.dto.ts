import { IsInt, IsNotEmptyObject } from 'class-validator';
import { ColorOptionDto } from '../color-option.dto';

export class PostStockDto {
  @IsInt()
  readonly price: number;

  @IsInt()
  readonly quantity: number;

  @IsNotEmptyObject()
  readonly colorOption: ColorOptionDto;
}
