import { IsNotEmpty } from "class-validator";
import { Shop } from "../entities/shop.entity";

export class CreateShopUrlDto {
    @IsNotEmpty()
    shop: Shop;

    @IsNotEmpty()
    domain: string;

    @IsNotEmpty()
    domain_ssl: string;

    @IsNotEmpty()
    physical_uri: string;

    virtual_uri: string;

    @IsNotEmpty()
    main: boolean;

    @IsNotEmpty()
    active: boolean;
}