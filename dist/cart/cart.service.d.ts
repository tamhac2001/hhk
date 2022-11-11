import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteCartDetailDto, PostCartDetailDto, UpdateCartDetailDto } from './dto';
export declare class CartService {
    private prisma;
    constructor(prisma: PrismaService);
    findCart(userID: string): Promise<import("@prisma/client").Cart & {
        cartDetails: (import("@prisma/client").CartDetail & {
            device: import("@prisma/client").Device & {
                stocks: (import("@prisma/client").Stock & {
                    colorOption: import("@prisma/client").ColorOption;
                })[];
            };
        })[];
    }>;
    addToCart(userID: string, dto: PostCartDetailDto): Promise<import("@prisma/client").Cart & {
        cartDetails: (import("@prisma/client").CartDetail & {
            device: import("@prisma/client").Device & {
                stocks: (import("@prisma/client").Stock & {
                    colorOption: import("@prisma/client").ColorOption;
                })[];
            };
        })[];
    }>;
    updateCartDetail(dto: UpdateCartDetailDto): Promise<import("@prisma/client").CartDetail>;
    deleteFromCart(dto: DeleteCartDetailDto): Promise<void>;
}
