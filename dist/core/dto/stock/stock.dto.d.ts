import { ColorOptionDto } from '../color-option.dto';
import { PostStockDto } from './post-stock.dto';
export declare class StockDto extends PostStockDto {
    readonly id: string;
    readonly colorOption: ColorOptionDto;
}
