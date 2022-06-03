import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ModuleController } from '../../core/module.controller';
import { CreateShopGroupDto } from './dto/create-shop-group.dto';
import { ShopGroup } from './entities/shop-group.entity';
import { ShopGroupService } from './services/shop-group.service';

@ApiTags('shop-group')
@Controller('shop-group')
export class ShopGroupController extends ModuleController {
  constructor(
    private readonly shopGroupService: ShopGroupService
  ) {
    super(shopGroupService);
    this.nameModule = 'ShopGroup';
    this.entity = ShopGroup;
    this.createDto = CreateShopGroupDto;
  }
}
