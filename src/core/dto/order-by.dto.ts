import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { OrderBy } from '../enums';

export class OrderByDto {
  @Expose({
    name: 'order-by',
    toPlainOnly: true,
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'price-acs') return OrderBy.PriceAcs;
    else if (value === 'price-desc') return OrderBy.PriceDesc;
    return OrderBy.Popularity;
  })
  readonly orderBy: OrderBy = OrderBy.Popularity;
}
