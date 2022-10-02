import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { cleanObject } from 'src/utils';
import {
  DeleteCartDetailDto,
  PostCartDetailDto,
  UpdateCartDetailDto,
} from './dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  /**
    @return return the cart with all cartDetail orderBy updatedAt desc
   */
  async findCart(userID: string) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        id: userID,
      },
      include: {
        cartDetails: {
          include: {
            device: {
              include: {
                stocks: {
                  include: {
                    colorOption: true,
                  },
                },
              },
            },
          },
          orderBy: {
            updatedAt: 'desc',
          },
        },
      },
    });
    cleanObject(cart);
    return cart;
  }

  async addToCart(userID: string, dto: PostCartDetailDto) {
    // check if user had cart. If not create a new one. If yes, return cart
    const cart = await this.prisma.cart.upsert({
      where: {
        id: userID,
      },
      create: {
        id: userID,
        cartDetails: {
          create: {
            deviceID: dto.deviceID,
            stockID: dto.stockID,
            quantity: dto.quantity,
          },
        },
      },
      update: {},
      include: {
        cartDetails: true,
      },
    });
    // Check if the cartDetail (device and device's color) already had in cart.
    const cartDetail = cart.cartDetails.find(
      (cartDetail) =>
        cartDetail.deviceID === dto.deviceID &&
        cartDetail.stockID === dto.stockID,
    );
    // If yes, add 1 to the quantity of the cartDetail
    if (cartDetail) {
      return await this.prisma.cart.update({
        where: {
          id: userID,
        },
        data: {
          cartDetails: {
            update: {
              where: {
                id: cartDetail.id,
              },
              data: {
                quantity: cartDetail.quantity + 1,
              },
            },
          },
        },
        include: {
          cartDetails: {
            where: {
              id: cartDetail.id,
            },
            include: {
              device: {
                include: {
                  stocks: {
                    where: {
                      id: dto.stockID,
                    },
                    include: {
                      colorOption: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    }
    // If not, add new cartDetail into cart
    else {
      return await this.prisma.cart.update({
        where: {
          id: userID,
        },
        data: {
          cartDetails: {
            create: {
              deviceID: dto.deviceID,
              stockID: dto.stockID,
              quantity: dto.quantity,
            },
          },
        },
        include: {
          cartDetails: {
            where: {
              deviceID: dto.deviceID,
              stockID: dto.stockID,
            },
            include: {
              device: {
                include: {
                  stocks: {
                    where: {
                      id: dto.stockID,
                    },
                    include: {
                      colorOption: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    }
  }

  async updateCartDetail(dto: UpdateCartDetailDto) {
    return await this.prisma.cartDetail.update({
      where: {
        id: dto.id,
      },
      data: {
        quantity: dto.quantity,
      },
    });
  }

  async deleteFromCart(dto: DeleteCartDetailDto) {
    await this.prisma.cartDetail.delete({
      where: {
        id: dto.id,
      },
    });
  }
}
