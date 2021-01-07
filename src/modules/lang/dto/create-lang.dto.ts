import { IsNotEmpty } from "class-validator";

export class CreateLangDto {
    @IsNotEmpty()
    name: string;
    
    active: boolean;

    @IsNotEmpty()
    iso_code: string;

    @IsNotEmpty()
    language_code: string;
    
    locale: string;

    @IsNotEmpty()
    date_format_lite: string;

    @IsNotEmpty()
    date_format_full: string;
    
    is_rtl: boolean;
}