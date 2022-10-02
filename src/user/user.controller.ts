import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUserId } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}
  @UseGuards(JwtGuard)
  @Get('me')
  findUser(@GetUserId() userId: string) {
    return this.service.findUser(userId);
  }
}
