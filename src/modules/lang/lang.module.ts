import { Module } from '@nestjs/common';
import { LangService } from './lang.service';
import { LangController } from './lang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LangShop } from './entities/lang_shop.entity';
import { Lang } from './entities/lang.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lang, LangShop])
  ],
  controllers: [LangController],
  providers: [LangService]
})
export class LangModule {}
