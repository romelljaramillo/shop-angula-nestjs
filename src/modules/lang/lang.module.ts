import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lang } from './entities/lang.entity';
import { LangService } from './lang.service';
import { LangController } from './lang.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lang])
  ],
  controllers: [LangController],
  providers: [LangService],
  exports: [LangService],
})
export class LangModule {}
