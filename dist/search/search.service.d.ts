import { Device } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SearchService {
    private prisma;
    constructor(prisma: PrismaService);
    searchByString(searchString: string): Promise<Device[]>;
    searchSmartphone(searchedKeywordList: Array<string>, searchedResult: any): Promise<void>;
    searchTablet(searchedKeywordList: Array<string>, searchedResult: any): Promise<void>;
    searchLaptop(searchedKeywordList: Array<string>, searchedResult: any): Promise<void>;
}
