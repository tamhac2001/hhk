import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findUser(userId: string) {
    const user = this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        name: true,
        phoneNumber: true,
        cart: true,
        orders: true,
      },
    });
    return user;
  }
}
