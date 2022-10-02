import { IsNotEmpty } from 'class-validator';
import { OrderDetailDto } from './order-detail.dto';

export class OrderDto {
  @IsNotEmpty()
  orderDetails: Array<OrderDetailDto>;
}
