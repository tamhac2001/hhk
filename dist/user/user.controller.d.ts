import { UserService } from './user.service';
export declare class UserController {
    private service;
    constructor(service: UserService);
    findUser(userId: string): Promise<{
        email: string;
        name: string;
        phoneNumber: string;
        cart: import("@prisma/client").Cart;
        orders: import("@prisma/client").Order[];
    }>;
}
