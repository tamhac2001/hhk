import { Module } from '@nestjs/common';
import { LaptopService } from './laptop.service';
import { LaptopController } from './laptop.controller';

@Module({
  providers: [LaptopService],
  controllers: [LaptopController]
})
export class LaptopModule {}
