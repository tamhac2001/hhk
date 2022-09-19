import { Injectable } from '@nestjs/common';
import { LaptopManufacturer } from '@prisma/client';
import { SortBy } from 'src/core/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LaptopDto } from './dto';

@Injectable()
export class LaptopService {
  constructor(private prisma: PrismaService) {}

  async find(
    manufacturer?: LaptopManufacturer[],
    minPrice?: number,
    maxPrice?: number,
    sortBy?: SortBy,
  ) {
    console.log('manufacturer:' + manufacturer);
    console.log('min-price:' + minPrice);
    console.log('max-price:' + maxPrice);
    console.log('sortBy:' + sortBy);

    const laptops = await this.prisma.laptop.findMany({
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
      // sort buyOptions price in each laptop acs
      laptops.forEach((laptop, i, _) => {
        laptop.buyOptions.sort((a, b) => a.price - b.price);
      });
      // sort each laptop by there smallest price asc
      return laptops.sort(
        (a, b) => a.buyOptions[0].price - b.buyOptions[0].price,
      );
    }
    // sort each laptop by there smallest price desc
    return laptops
      .sort((a, b) => a.buyOptions[0].price - b.buyOptions[0].price)
      .reverse();
  }

  async findBySearchedString(searchedString: string) {}

  async create(dto: LaptopDto) {
    return await this.prisma.laptop.upsert({
      where: {
        code: dto.code,
      },
      create: {
        code: dto.code,
        name: dto.name,
        manufacturer: dto.manufacturer,
        specification: dto.specification,
        buyOptions: dto.buyOptions,
      },
      update: dto,
    });
  }

  async update(dto: LaptopDto) {
    return await this.prisma.laptop.update({
      where: {
        code: dto.code,
      },
      data: dto,
    });
  }
}
