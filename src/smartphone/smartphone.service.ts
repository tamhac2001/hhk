import { Injectable } from '@nestjs/common';
import { PhoneManufacturer } from '@prisma/client';
import { SortBy } from 'src/core/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SmartphoneDto } from './dto';
@Injectable()
export class SmartphoneService {
  constructor(private prisma: PrismaService) {}

  async find(
    manufacturer?: PhoneManufacturer[],
    minPrice?: number,
    maxPrice?: number,
    sortBy?: SortBy,
  ) {
    console.log('manufacturer:' + manufacturer);
    console.log('min-price:' + minPrice);
    console.log('max-price:' + maxPrice);
    console.log('sortBy:' + sortBy);

    const smartphones = await this.prisma.smartphone.findMany({
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
      // sort buyOptions price in each smartphone acs
      smartphones.forEach((smartphone, i, _) => {
        smartphone.buyOptions.sort((a, b) => a.price - b.price);
      });
      // sort each smartphone by there smallest price asc
      return smartphones.sort(
        (a, b) => a.buyOptions[0].price - b.buyOptions[0].price,
      );
    }
    // sort each smartphone by there smallest price desc
    return smartphones
      .sort((a, b) => a.buyOptions[0].price - b.buyOptions[0].price)
      .reverse();
  }

  async findByName(phoneName: string) {
    return await this.prisma.smartphone.findUnique({
      where: {
        name: phoneName,
      },
    });
  }

  async create(dto: SmartphoneDto) {
    const smartphone = await this.prisma.smartphone.findUnique({
      where: {
        code: dto.code,
      },
    });
    if (!smartphone) {
      return await this.prisma.smartphone.create({
        data: {
          code: dto.code,
          name: dto.name,
          manufacturer: dto.manufacture,
          specification: dto.specification,
          buyOptions: dto.buyOptions,
        },
      });
    }
    return this.update(dto);
  }

  async update(dto: SmartphoneDto) {
    return await this.prisma.smartphone.update({
      where: {
        code: dto.code,
      },
      data: {
        manufacturer: dto.manufacture,
        specification: dto.specification,
        buyOptions: dto.buyOptions,
      },
    });
  }

  // async updateCartDetail() {}
}
