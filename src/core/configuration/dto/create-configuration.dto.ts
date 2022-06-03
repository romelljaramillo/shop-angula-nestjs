import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConfigurationDto {
    
    @ApiProperty()
    @IsNumber()
    readonly id: number;
    
    @ApiProperty()
    @IsNumber()
    readonly id_shop: number;
  
    @ApiProperty()
    @IsNumber()
    readonly id_shop_group: number;
  
    @ApiProperty()
    @IsString()
    readonly name: string;
  
    @ApiProperty()
    @IsString()
    readonly value: string;
}