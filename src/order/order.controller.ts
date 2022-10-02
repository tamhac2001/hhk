import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';
import { OrderByDto } from './dto';
import { DateRangeDto } from './dto/date-range.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private service: OrderService) {}

  @Get()
  findOrders(
    @Query(
      'userID',
      new ParseArrayPipe({
        optional: true,
        expectedType: Array<string>,
        separator: ',',
      }),
    )
    userIDs?: Array<string>,
    @Query(
      'deviceId',
      new ParseArrayPipe({
        optional: true,
        expectedType: Array<string>,
        separator: ',',
      }),
    )
    deviceIDs?: Array<string>,
    @Query() dateRange?: DateRangeDto,
    @Query('order-by') orderBy?: OrderByDto,
  ) {}
}
