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
    if (value === 'total') return OrderBy.Total;
    else if (value === 'date-desc') return OrderBy.DateDesc;
    return OrderBy.DateAsc;
  })
  readonly orderBy: OrderBy = OrderBy.DateAsc;
}
