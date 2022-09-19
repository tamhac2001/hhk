import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PhoneManufacturer } from '@prisma/client';
import { PriceRangeDto, SortByDto } from 'src/core/dto';
import { SmartphoneDto } from './dto';
import { SmartphoneService } from './smartphone.service';

@Controller('smartphones')
export class SmartphoneController {
  constructor(private service: SmartphoneService) {}

  @Get()
  find(
    @Query(
      'manufacturers',
      new ParseArrayPipe({
        optional: true,
        expectedType: Array<PhoneManufacturer>,
        separator: ',',
      }),
    )
    manufacturer?: Array<PhoneManufacturer>,
    @Query()
    priceRange?: PriceRangeDto,
    @Query()
    sortBy?: SortByDto,
  ) {
    return this.service.find(
      manufacturer,
      priceRange.minPrice,
      priceRange.maxPrice,
      sortBy.sortBy,
    );
  }

  @Get(':phoneName')
  findByName(@Param('phoneName') phoneName: string) {
    return this.service.findByName(phoneName);
  }

  @Post('create')
  create(@Body() dto: SmartphoneDto) {
    return this.service.create(dto);
  }

  @Put('update')
  update(@Body() dto: SmartphoneDto) {
    return this.service.update(dto);
  }
}
