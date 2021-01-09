import { Controller } from '@nestjs/common';
import { ModuleController } from '../../core/module.controller';
import { CreateShopGroupDto } from './dto/create-shop-group.dto';
import { ShopGroup } from './entities/shop_group.entity';
import { ShopService } from './shop.service';

@Controller('shop-group')
export class ShopGroupController extends ModuleController {
    constructor(
      private readonly shopService: ShopService
    ) {
      super(shopService);
      this.nameModule = 'ShopGroup';
      this.entity = ShopGroup;
      this.createDto = CreateShopGroupDto;
    }
  }
