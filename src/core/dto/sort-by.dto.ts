import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class SortByDto {
  @Expose({
    name: 'sort-by',
    toPlainOnly: true,
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'price-acs') return SortBy.PriceAcs;
    return SortBy.PriceDesc;
  })
  readonly sortBy: SortBy = SortBy.PriceAcs;
}

export enum SortBy {
  PriceAcs = 'price-acs',
  PriceDesc = 'price-desc',
}
