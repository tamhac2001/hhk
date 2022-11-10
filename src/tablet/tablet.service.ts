import { Injectable } from '@nestjs/common';
import { Manufacturer } from '@prisma/client';
import { CreateDeviceDto, DeviceDto } from 'src/core/dto';
import { OrderBy } from 'src/core/enums';
import { PrismaService } from 'src/prisma/prisma.service';
import { cleanObject } from 'src/utils';

@Injectable()
export class TabletService {
  constructor(private prisma: PrismaService) {}

  async find(
    manufacturer?: Manufacturer[],
    minPrice?: number,
    maxPrice?: number,
    orderBy?: OrderBy,
    page?: number,
  ) {
    console.log('manufacturer:' + manufacturer);
    console.log('min-price:' + minPrice);
    console.log('max-price:' + maxPrice);
    console.log('orderBy:' + orderBy);
    console.log('page:' + page.toString());

    const displayedDevicePerPage = 20;

    // get all default option tablet
    const tablets = await this.prisma.device.findMany({
      where: {
        deviceType: {
          equals: 'tablet',
        },
        manufacturer: manufacturer
          ? {
              in: manufacturer,
            }
          : {},
        stocks: {
          some: {
            price: {
              gte: minPrice,
              lte: maxPrice,
            },
          },
        },
        isDefaultOption: true,
      },
      skip: displayedDevicePerPage * (page - 1),
      take: displayedDevicePerPage,
      include: {
        stocks: {
          select: {
            id: true,
            colorOption: {
              select: {
                id: true,
                color: true,
                imageUrls: true,
              },
            },
            price: true,
            quantity: true,
          },
        },
        otherOptions: {
          include: {
            stocks: {
              select: {
                id: true,
                colorOption: {
                  select: {
                    id: true,
                    color: true,
                    imageUrls: true,
                  },
                },
                price: true,
                quantity: true,
              },
            },
          },
        },
        _count: {
          select: {
            inOrderDetails: true,
            inCartDetails: true,
          },
        },
      },
    });
    console.log(tablets.length);

    if (orderBy === OrderBy.PriceAcs) {
      // sort tablet by there smallest price asc
      tablets.sort((a, b) => a.stocks.at(0).price - b.stocks.at(0).price);
    } else if (orderBy === OrderBy.PriceDesc) {
      // sort tablet by there smallest price desc
      tablets
        .sort((a, b) => a.stocks.at(0).price - b.stocks.at(0).price)
        .reverse();
    } else {
      // sort tablet by there popularity
      tablets.sort(
        (a, b) =>
          a._count.inCartDetails +
          a._count.inOrderDetails -
          (b._count.inCartDetails + b._count.inOrderDetails),
      );
    }
    // delete _count from tablet
    tablets.forEach((tablet) => delete tablet._count);
    // delete null fields
    cleanObject(tablets);
    return tablets;
  }

  async create(dto: CreateDeviceDto) {
    return await this.prisma.device.create({
      data: {
        modelNumber: dto.modelNumber,
        deviceType: dto.deviceType,
        manufacturer: dto.manufacturer,
        name: dto.name,
        specifications: dto.specifications,
        customizableSpecifications: dto.customizableSpecifications,
        isDefaultOption: dto.isDefaultOption,
        defaultOptionID: dto.defaultOptionID,
        stocks: {
          create: dto.stocks.map((stock) => {
            return {
              price: stock.price,
              quantity: stock.quantity,
              colorOption: stock.colorOption.id
                ? {
                    connect: {
                      id: stock.colorOption.id,
                    },
                  }
                : {
                    create: {
                      color: stock.colorOption.color,
                      imageUrls: stock.colorOption.imageUrls,
                    },
                  },
            };
          }),
        },
      },
      include: {
        stocks: {
          select: {
            id: true,
            colorOption: {
              select: {
                id: true,
                color: true,
                imageUrls: true,
              },
            },
            price: true,
            quantity: true,
          },
        },
      },
    });
  }

  async update(dto: DeviceDto) {
    return await this.prisma.device.update({
      where: {
        id: dto.id,
      },
      data: {
        modelNumber: dto.modelNumber,
        name: dto.name,
        manufacturer: dto.manufacturer,
        specifications: dto.specifications,
        customizableSpecifications: dto.customizableSpecifications,
        stocks: {
          update: dto.stocks.map((stock) => {
            return {
              where: {
                id: stock.id,
              },
              data: {
                price: stock.price,
                quantity: stock.quantity,
                colorOption: {
                  update: {
                    imageUrls: {
                      set: stock.colorOption.imageUrls,
                    },
                  },
                },
              },
            };
          }),
        },
        isDefaultOption: dto.isDefaultOption,
        defaultOptionID: dto.defaultOptionID,
      },
      include: {
        stocks: {
          select: {
            id: true,
            colorOption: {
              select: {
                id: true,
                color: true,
                imageUrls: true,
              },
            },
            price: true,
            quantity: true,
          },
        },
      },
    });
  }
}
