import { SearchService } from './search.service';
export declare class SearchController {
    private service;
    constructor(service: SearchService);
    searchByString(searchString: string): Promise<import("@prisma/client").Device[]>;
}
