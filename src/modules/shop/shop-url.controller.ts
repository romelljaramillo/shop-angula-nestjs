import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ModuleController } from '../../core/module.controller';
import { CreateShopUrlDto } from './dto/create-shop-url.dto';
import { ShopUrl } from './entities/shop-url.entity';
import { ShopUrlService } from './services/shop-url.service';

@ApiTags('shop-url')
@Controller('shop-url')
export class ShopUrlController extends ModuleController {
    constructor(
        private readonly shopUrlService: ShopUrlService
    ) {
        super(shopUrlService);
        this.nameModule = 'ShopUrl';
        this.entity = ShopUrl;
        this.createDto = CreateShopUrlDto;
    }
}
