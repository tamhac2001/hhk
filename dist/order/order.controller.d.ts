import { OrderByDto } from './dto';
import { DateRangeDto } from './dto/date-range.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private service;
    constructor(service: OrderService);
    findOrders(userIDs?: Array<string>, deviceIDs?: Array<string>, dateRange?: DateRangeDto, orderBy?: OrderByDto): void;
}
