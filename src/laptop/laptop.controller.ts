import {
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { LaptopManufacturer } from '@prisma/client';
import { PriceRangeDto, SortByDto } from 'src/core/dto';
import { LaptopDto } from './dto';
import { LaptopService } from './laptop.service';

@Controller('laptops')
export class LaptopController {
  constructor(private service: LaptopService) {}

  @Get()
  find(
    @Query(
      'manufacturers',
      new ParseArrayPipe({
        optional: true,
        expectedType: Array<LaptopManufacturer>,
        separator: ',',
      }),
    )
    manufacturer?: Array<LaptopManufacturer>,
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

  @Get()
  findByName(@Query('search') searchedString: string) {
    return this.service.findBySearchedString(searchedString);
  }

  @Post('create')
  create(@Body() dto: LaptopDto) {
    return this.service.create(dto);
  }

  @Put('update')
  update1(@Body() dto: LaptopDto) {
    return this.service.update(dto);
  }

  @Patch('update')
  update2(@Body() dto: LaptopDto) {
    return this.service.update(dto);
  }
}
