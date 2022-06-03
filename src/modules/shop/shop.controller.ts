import { Controller } from '@nestjs/common';
import { ModuleController } from '../../core/module.controller';
import { Shop } from './entities/shop.entity';
import { ShopService } from './services/shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shop')
@Controller('shop')
export class ShopController extends ModuleController {
  constructor(
    private readonly shopService: ShopService
  ) {
    super(shopService);
    this.nameModule = 'Shop';
    this.entity = Shop;
    this.createDto = CreateShopDto;
  }
}
