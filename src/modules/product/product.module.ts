import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductLang } from './entities/product_lang.entity';
import { ProductShop } from './entities/product_shop.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductLang, ProductShop])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
