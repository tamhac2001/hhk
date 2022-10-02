import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderBy } from './enums';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async findOrders(
    userIDs?: Array<string>,
    deviceIds?: Array<string>,
    startDate?: string,
    endDate?: string,
    orderBy?: OrderBy,
  ) {
    const orders = await this.prisma.order.findMany({
      where: {
        userID: {
          in: userIDs,
        },
        orderDetails: {
          some: {
            deviceID: {
              in: deviceIds,
            },
          },
        },
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        orderDetails: true,
      },
    });
    if(orderBy === OrderBy.Total){
        orders.sort((a,b) => a.orderDetails.)
    }
  }
}
