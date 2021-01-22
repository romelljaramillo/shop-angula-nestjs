import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopUrlDto } from '../dto/create-shop-url.dto';
import { UpdateShopDto } from '../dto/update-shop.dto';
import { ShopUrl } from '../entities/shop-url.entity';

@Injectable()
export class ShopUrlService {

  constructor(
    @InjectRepository(ShopUrl)
    private readonly shopsRepository: Repository<ShopUrl>
  ) { }

  async create(createShopUrlDto: CreateShopUrlDto): Promise<any> {
    const shopUrl = new ShopUrl();
    shopUrl.shop = createShopUrlDto.shop;
    shopUrl.domain = createShopUrlDto.domain;
    shopUrl.domain_ssl = createShopUrlDto.domain_ssl;
    shopUrl.physical_uri = createShopUrlDto.physical_uri;
    shopUrl.virtual_uri = createShopUrlDto.virtual_uri;
    shopUrl.main = createShopUrlDto.main;
    shopUrl.active = createShopUrlDto.active;

    return this.shopsRepository.save(shopUrl)
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
