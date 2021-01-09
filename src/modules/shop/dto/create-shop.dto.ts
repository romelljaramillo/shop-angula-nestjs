import { IsNotEmpty } from "class-validator";
import { ShopGroup } from "../entities/shop_group.entity";

export class CreateShopDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    shopGroupId: ShopGroup;

    @IsNotEmpty()
    categoryId: number;

    @IsNotEmpty()
    theme_name: string;

    @IsNotEmpty()
    active: boolean;

    deleted: boolean;
}