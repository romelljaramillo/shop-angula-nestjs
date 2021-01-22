import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopGroupDto } from '../dto/create-shop-group.dto';
import { UpdateShopDto } from '../dto/update-shop.dto';
import { ShopGroup } from '../entities/shop-group.entity';

@Injectable()
export class ShopGroupService {

  constructor(
    @InjectRepository(ShopGroup)
    private readonly shopGroupRepository: Repository<ShopGroup>
  ) { }

  async create(createShopGroupDto: CreateShopGroupDto): Promise<any> {
    const shopGroup = new ShopGroup();
    shopGroup.name = createShopGroupDto.name;
    shopGroup.share_customer = createShopGroupDto.share_customer;
    shopGroup.share_order = createShopGroupDto.share_order;
    shopGroup.share_stock = createShopGroupDto.share_stock;
    shopGroup.active = createShopGroupDto.active;
    shopGroup.deleted = createShopGroupDto.deleted;

    return this.shopGroupRepository.save(shopGroup)
      .catch(err => {

        let message: string;

        if (err.code === "ER_DUP_ENTRY") {
          message = `Duplicate entry`;
        } else {
          message = err.message;
        }

        return {
          statusCode: 400,
          message: [message],
          error: `Bad Request`
        };
      });
  }

  async findAll(): Promise<ShopGroup[]> {
    return this.shopGroupRepository.find({ 
      select: [
        "id", 
        "name", 
        "share_customer", 
        "share_order", 
        "share_stock", 
        "active", 
        "deleted",
        "updatedAt"
      ] 
    });
  }

  findOneId(id: string): Promise<ShopGroup> {
    return this.shopGroupRepository.findOne(id);
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  async remove(id: string): Promise<void> {
    await this.shopGroupRepository.delete(id);
  }
}
