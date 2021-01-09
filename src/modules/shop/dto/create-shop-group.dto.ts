import { IsNotEmpty } from "class-validator";

export class CreateShopGroupDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    share_customer: boolean;

    @IsNotEmpty()
    share_order: boolean;

    @IsNotEmpty()
    share_stock: boolean;

    @IsNotEmpty()
    active: boolean;

    deleted: boolean;
}