import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BuyOptionsDto {
  @IsOptional()
  @IsString()
  ram: string;

  @IsOptional()
  @IsString()
  storage: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsArray()
  imagesUrl: Array<string>;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNotEmpty()
  inStock: number;
}
