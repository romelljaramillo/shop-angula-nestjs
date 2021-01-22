import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopDto } from '../dto/create-shop.dto';
import { UpdateShopDto } from '../dto/update-shop.dto';
import { Shop } from '../entities/shop.entity';

@Injectable()
export class ShopService {

  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>
  ) { }

  async create(createShopDto: CreateShopDto): Promise<any> {
    const shop = new Shop();
    shop.name = createShopDto.name;
    shop.shopGroup = createShopDto.shopGroupId;
    shop.categoryId = createShopDto.categoryId;
    shop.theme_name = createShopDto.name;
    shop.active = createShopDto.active;
    shop.deleted = createShopDto.deleted;

    return this.shopRepository.save(shop)
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

  async findAll(): Promise<Shop[]> {
    return this.shopRepository.find({ 
      select: [
        "id", 
        "name", 
        "shopGroup", 
        "categoryId", 
        "theme_name", 
        "active", 
        "deleted", 
        "updatedAt"
      ] 
    });
  }

  findOneId(id: string): Promise<Shop> {
    return this.shopRepository.findOne(id);
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  async remove(id: string): Promise<void> {
    await this.shopRepository.delete(id);
  }
}
