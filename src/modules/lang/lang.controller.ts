import { Controller } from '@nestjs/common';
import { ModuleController } from '../../core/module.controller';
import { Lang } from './entities/lang.entity';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('lang')
@Controller('lang')
export class LangController extends ModuleController {
  constructor(
    private readonly langService: LangService
  ) {
    super(langService);
    this.nameModule = 'lang';
    this.entity = Lang;
    this.createDto = CreateLangDto;
  }
}
