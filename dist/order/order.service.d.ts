import { PrismaService } from 'src/prisma/prisma.service';
import { OrderBy } from './enums';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    findOrders(userIDs?: Array<string>, deviceIds?: Array<string>, startDate?: string, endDate?: string, orderBy?: OrderBy): Promise<void>;
}
