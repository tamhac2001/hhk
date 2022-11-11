import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findUser(userId: string): Promise<{
        email: string;
        name: string;
        phoneNumber: string;
        cart: import("@prisma/client").Cart;
        orders: import("@prisma/client").Order[];
    }>;
}
