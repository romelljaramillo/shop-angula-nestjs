import { Controller } from '@nestjs/common';
import { ModuleController } from '../../core/module.controller';
import { CreateShopUrlDto } from './dto/create-shop-url.dto';
import { ShopUrl } from './entities/shop_url.entity';
import { ShopService } from './shop.service';

@Controller('shop-url')
export class ShopUrlController extends ModuleController {
    constructor(
        private readonly shopService: ShopService
    ) {
        super(shopService);
        this.nameModule = 'ShopUrl';
        this.entity = ShopUrl;
        this.createDto = CreateShopUrlDto;
    }
}
