import { Injectable } from '@nestjs/common';
import { TabletManufacturer } from '@prisma/client';
import { SortBy } from 'src/core/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TabletDto } from './dto';

@Injectable()
export class TabletService {
  constructor(private prisma: PrismaService) {}

  async find(
    manufacturer?: TabletManufacturer[],
    minPrice?: number,
    maxPrice?: number,
    sortBy?: SortBy,
  ) {
    console.log('manufacturer:' + manufacturer);
    console.log('min-price:' + minPrice);
    console.log('max-price:' + maxPrice);
    console.log('sortBy:' + sortBy);

    const tablets = await this.prisma.tablet.findMany({
      where: {
        manufacturer: manufacturer
          ? {
              in: manufacturer,
            }
          : {},
        buyOptions: {
          some: {
            price: {
              gte: minPrice,
              lte: maxPrice,
            },
          },
        },
      },
    });
    if (sortBy == SortBy.PriceAcs) {
      // sort buyOptions price in each tablet acs
      tablets.forEach((tablet, i, _) => {
        tablet.buyOptions.sort((a, b) => a.price - b.price);
      });
      // sort each tablet by there smallest price asc
      return tablets.sort(
        (a, b) => a.buyOptions[0].price - b.buyOptions[0].price,
      );
    }
    // sort each tablet by there smallest price desc
    return tablets
      .sort((a, b) => a.buyOptions[0].price - b.buyOptions[0].price)
      .reverse();
  }

  async findByName(tabletName: string) {
    return await this.prisma.tablet.findUnique({
      where: {
        name: tabletName,
      },
    });
  }

  async create(dto: TabletDto) {
    const tablet = await this.prisma.tablet.findUnique({
      where: {
        code: dto.code,
      },
    });
    if (!tablet) {
      return await this.prisma.tablet.create({
        data: {
          code: dto.code,
          name: dto.name,
          manufacturer: dto.manufacturer,
          specification: dto.specification,
          buyOptions: dto.buyOptions,
        },
      });
    }
    return this.update(dto);
  }

  async update(dto: TabletDto) {
    return await this.prisma.tablet.update({
      where: {
        code: dto.code,
      },
      data: dto,
    });
  }
}
