import { Module } from '@nestjs/common';
import { SmartphoneService } from './smartphone.service';
import { SmartphoneController } from './smartphone.controller';

@Module({
  providers: [SmartphoneService],
  controllers: [SmartphoneController]
})
export class SmartphoneModule {}
