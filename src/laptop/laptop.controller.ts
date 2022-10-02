import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseArrayPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Manufacturer } from '@prisma/client';
import {
  DeviceDto,
  OrderByDto,
  PostDeviceDto,
  PriceRangeDto,
} from 'src/core/dto';

import { LaptopService } from './laptop.service';

@Controller('laptops')
export class LaptopController {
  constructor(private service: LaptopService) {}

  @Get()
  findLaptops(
    @Query(
      'manufacturers',
      new ParseArrayPipe({
        optional: true,
        expectedType: Array<Manufacturer>,
        separator: ',',
      }),
    )
    manufacturer?: Array<Manufacturer>,
    @Query()
    priceRange?: PriceRangeDto,
    @Query()
    orderByDto?: OrderByDto,
    @Query('page', new DefaultValuePipe(1))
    page?: number,
  ) {
    return this.service.find(
      manufacturer,
      priceRange.minPrice,
      priceRange.maxPrice,
      orderByDto.orderBy,
      page,
    );
  }
  @Post('create')
  create(@Body() dto: PostDeviceDto) {
    return this.service.create(dto);
  }

  @Put('update')
  update1(@Body() dto: DeviceDto) {
    return this.service.update(dto);
  }

  @Patch('update')
  update2(@Body() dto: DeviceDto) {
    return this.service.update(dto);
  }
}
