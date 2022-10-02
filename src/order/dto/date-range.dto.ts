import { Expose } from 'class-transformer';
import { IsDateString, IsOptional } from 'class-validator';

export class DateRangeDto {
  @Expose({
    name: 'start-date',
    toPlainOnly: true,
  })
  @IsDateString()
  @IsOptional()
  readonly startDate?: string;

  @Expose({
    name: 'end-date',
    toPlainOnly: true,
  })
  @IsDateString()
  @IsOptional()
  readonly endDate: string = Date();
}
