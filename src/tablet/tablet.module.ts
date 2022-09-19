import { Module } from '@nestjs/common';
import { TabletController } from './tablet.controller';
import { TabletService } from './tablet.service';

@Module({
  controllers: [TabletController],
  providers: [TabletService]
})
export class TabletModule {}
