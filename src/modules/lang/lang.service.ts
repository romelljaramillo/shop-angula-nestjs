import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLangDto } from './dto/create-lang.dto';
import { Lang } from './entities/lang.entity';

@Injectable()
export class LangService {

  constructor(
    @InjectRepository(Lang)
    private readonly langsRepository: Repository<Lang>,
  ) { }

  async create(createLangDto: CreateLangDto): Promise<any> {

    const lang = new Lang();
    const { 
      name, active, iso_code, language_code,
      locale, date_format_lite, date_format_full, 
      is_rtl 
    } = createLangDto;
    
    lang
    lang.name             = name;
    lang.active           = (active) ? active : false;
    lang.iso_code         = iso_code;
    lang.language_code    = language_code;
    lang.locale           = locale;
    lang.date_format_lite = date_format_lite;
    lang.date_format_full = date_format_full;
    lang.is_rtl           = (is_rtl) ? is_rtl : false;
    
    return this.langsRepository.save(lang)
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

  async findAll(): Promise<Lang[]> {
    return this.langsRepository.find({ 
      select: [
        "id",
        "name",
        "active",
        "iso_code",
        "language_code",
        "locale",
        "date_format_lite",
        "date_format_full",
        "is_rtl"
      ] 
    });
  }

  findOneId(id: string) {
    return this.langsRepository.findOne(id);
  }

  update(id: number, createLangDto: CreateLangDto) {
    return `This action updates a #${id} lang`;
  }

  async remove(id: string): Promise<any> {
    this.langsRepository.delete(id)
    .catch(err => {
      return {
        statusCode: 400,
        message: [err.code],
        error: `Bad Request`
      };
    });

    return {
      statusCode: 200,
      message: ['Delete OK'],
      ok: `Request`
    };
  }
}
