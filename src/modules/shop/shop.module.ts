import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopService } from './services/shop.service';
import { ShopGroupService } from './services/shop-group.service';
import { ShopUrlService } from './services/shop-url.service';
import { ShopController } from './shop.controller';
import { ShopGroupController } from './shop-group.controller';
import { ShopUrlController } from './shop-url.controller';
import { Shop } from './entities/shop.entity';
import { ShopGroup } from './entities/shop-group.entity';
import { ShopUrl } from './entities/shop-url.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shop]),
    TypeOrmModule.forFeature([ShopGroup]),
    TypeOrmModule.forFeature([ShopUrl]),
  ],
  controllers: [
    ShopController, 
    ShopGroupController, 
    ShopUrlController
  ],
  providers: [
    ShopService,
    ShopGroupService,
    ShopUrlService,
  ],
  exports: [
    ShopService,
    ShopGroupService,
    ShopUrlService,
  ],
})
export class ShopModule {}
