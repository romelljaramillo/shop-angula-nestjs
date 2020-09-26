import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Shop } from './entities/shop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopGroup } from './entities/shop_group.entity';
import { ShopUrl } from './entities/shop_url.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shop, ShopGroup, ShopUrl])
  ],
  controllers: [ShopController],
  providers: [ShopService]
})
export class ShopModule {}
