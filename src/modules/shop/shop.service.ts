import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopService {

  constructor(
    @InjectRepository(Shop)
    private readonly shopsRepository: Repository<Shop>,
  ) { }

  async create(createShopDto: CreateShopDto): Promise<any> {
    const shop = new Shop();
    shop.name = createShopDto.name;
    shop.shopGroup = createShopDto.shopGroupId;
    shop.categoryId = createShopDto.categoryId;
    shop.theme_name = createShopDto.name;
    shop.active = createShopDto.active;
    shop.deleted = createShopDto.deleted;

    return this.shopsRepository.save(shop)
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

  findAll() {
    return `This action returns all shop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shop`;
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
