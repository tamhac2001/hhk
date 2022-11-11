import { CartService } from './cart.service';
import { DeleteCartDetailDto, PostCartDetailDto, UpdateCartDetailDto } from './dto';
export declare class CartController {
    private service;
    constructor(service: CartService);
    findCart(userId: string): Promise<import("@prisma/client").Cart & {
        cartDetails: (import("@prisma/client").CartDetail & {
            device: import("@prisma/client").Device & {
                stocks: (import("@prisma/client").Stock & {
                    colorOption: import("@prisma/client").ColorOption;
                })[];
            };
        })[];
    }>;
    add(userId: string, dto: PostCartDetailDto): Promise<import("@prisma/client").Cart & {
        cartDetails: (import("@prisma/client").CartDetail & {
            device: import("@prisma/client").Device & {
                stocks: (import("@prisma/client").Stock & {
                    colorOption: import("@prisma/client").ColorOption;
                })[];
            };
        })[];
    }>;
    updateCart1(dto: UpdateCartDetailDto): Promise<import("@prisma/client").CartDetail>;
    updateCart2(dto: UpdateCartDetailDto): Promise<import("@prisma/client").CartDetail>;
    deleteCartDetail(dto: DeleteCartDetailDto): Promise<void>;
}
