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
import { ApiCreatedResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Manufacturer } from '@prisma/client';
import {
  CreateDeviceDto,
  DeviceDto,
  OrderByDto,
  PriceRangeDto,
} from 'src/core/dto';

import { LaptopService } from './laptop.service';

@Controller('laptops')
export class LaptopController {
  constructor(private service: LaptopService) {}

  @Get()
  @ApiQuery({
    name: 'manufacturers',
    required: false,
    isArray: true,
    enum: Manufacturer,
  })
  @ApiQuery({
    name: 'page',
    required: false,
  })
  @ApiOkResponse({
    isArray: true,
    type: DeviceDto,
  })
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
  @ApiCreatedResponse({
    type: DeviceDto,
  })
  create(@Body() dto: CreateDeviceDto) {
    return this.service.create(dto);
  }

  @Put('update')
  @ApiOkResponse({
    type: DeviceDto,
  })
  update1(@Body() dto: DeviceDto) {
    return this.service.update(dto);
  }

  @Patch('update')
  @ApiOkResponse({
    type: DeviceDto,
  })
  update2(@Body() dto: DeviceDto) {
    return this.service.update(dto);
  }
}
