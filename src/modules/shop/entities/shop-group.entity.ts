import { Column, Entity } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class ShopGroup extends Datecolumn {

    @Column({ type: 'varchar', length: 64, nullable: false })
    name: string;

    @Column({ nullable: false })
    share_customer: boolean;

    @Column({ nullable: false })
    share_order: boolean;

    @Column({ nullable: false })
    share_stock: boolean;

    @Column({ nullable: false })
    active: boolean;

    @Column({ nullable: false })
    deleted: boolean;
}