import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class PriceRangeDto {
  @Expose({
    name: 'min-price',
    toPlainOnly: true,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly minPrice?: number = 0;

  @Expose({
    name: 'max-price',
    toPlainOnly: true,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly maxPrice?: number = Number.MAX_SAFE_INTEGER;
}
