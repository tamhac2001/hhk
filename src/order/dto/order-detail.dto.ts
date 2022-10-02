import { Transform } from 'class-transformer';
import { IsInt, IsMongoId } from 'class-validator';

export class OrderDetailDto {
  @IsMongoId()
  readonly deviceID: string;

  @IsMongoId()
  readonly colorID: string;

  @IsInt()
  @Transform(({ value }) => parseInt(value))
  readonly quantity: number;
}
