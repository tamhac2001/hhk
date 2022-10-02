import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GetUserId } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CartService } from './cart.service';
import {
  DeleteCartDetailDto,
  PostCartDetailDto,
  UpdateCartDetailDto,
} from './dto';

@UseGuards(JwtGuard)
@Controller('cart')
export class CartController {
  constructor(private service: CartService) {}

  @Get()
  findCart(@GetUserId() userId: string) {
    return this.service.findCart(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  add(@GetUserId() userId: string, @Body() dto: PostCartDetailDto) {
    return this.service.addToCart(userId, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Put()
  updateCart1(@Body() dto: UpdateCartDetailDto) {
    return this.service.updateCartDetail(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch()
  updateCart2(@Body() dto: UpdateCartDetailDto) {
    return this.service.updateCartDetail(dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  deleteCartDetail(@Body() dto: DeleteCartDetailDto) {
    return this.service.deleteFromCart(dto);
  }
}
