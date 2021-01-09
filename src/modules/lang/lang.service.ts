import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { Lang } from './entities/lang.entity';

@Injectable()
export class LangService {

  constructor(
    @InjectRepository(Lang)
    private readonly langsRepository: Repository<Lang>,
  ) { }

  async create(createLangDto: CreateLangDto): Promise<any> {

    const lang = new Lang();
    lang.name = createLangDto.name;
    lang.active = (createLangDto.active) ? createLangDto.active : false;
    lang.iso_code = createLangDto.iso_code;
    lang.language_code = createLangDto.language_code;
    lang.locale = createLangDto.locale;
    lang.date_format_lite = createLangDto.date_format_lite;
    lang.date_format_full = createLangDto.date_format_full;
    lang.is_rtl = (createLangDto.is_rtl) ? createLangDto.is_rtl : false;

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

  update(id: number, UpdateLangDto: UpdateLangDto) {
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
