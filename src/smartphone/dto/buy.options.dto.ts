import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BuyOptionsDto {
  @IsOptional()
  @IsString()
  readonly ram: string;

  @IsOptional()
  @IsString()
  readonly storage: string;

  @IsOptional()
  @IsString()
  readonly color: string;

  @IsOptional()
  @IsArray()
  readonly imagesUrl: Array<string>;

  @IsNumber()
  readonly price: number;

  @IsInt()
  readonly inStock: number;
}
