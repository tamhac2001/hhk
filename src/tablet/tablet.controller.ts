import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TabletManufacturer } from '@prisma/client';
import { PriceRangeDto, SortByDto } from 'src/core/dto';
import { TabletDto } from './dto';
import { TabletService } from './tablet.service';

@Controller('tablets')
export class TabletController {
  constructor(private service: TabletService) {}

  @Get()
  find(
    @Query(
      'manufacturers',
      new ParseArrayPipe({
        optional: true,
        expectedType: Array<TabletManufacturer>,
        separator: ',',
      }),
    )
    manufacturer?: Array<TabletManufacturer>,
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

  @Get(':tabletName')
  findByName(@Param('tabletName') tabletName: string) {
    return this.service.findByName(tabletName);
  }

  @Post('create')
  create(@Body() dto: TabletDto) {
    return this.service.create(dto);
  }

  @Put('update')
  update1(@Body() dto: TabletDto) {
    return this.service.update(dto);
  }

  @Patch('update')
  update2(@Body() dto: TabletDto) {
    return this.service.update(dto);
  }
}
