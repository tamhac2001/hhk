import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LaptopModule } from './laptop/laptop.module';
import { PrismaModule } from './prisma/prisma.module';
import { SmartphoneModule } from './smartphone/smartphone.module';
import { TabletModule } from './tablet/tablet.module';
import { UserModule } from './user/user.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    SmartphoneModule,
    TabletModule,
    LaptopModule,
    UserModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
