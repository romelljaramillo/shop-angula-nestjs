import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { ShopGroup } from "./shop-group.entity";

@Entity()
export class Shop extends Datecolumn {

    @Column({ type: 'varchar', length: 64, nullable: false })
    name: string;

    @OneToOne(type => ShopGroup) // specify inverse side as a second parameter
    @JoinColumn()
    shopGroup: ShopGroup;

    @Column({ type: 'int', nullable: false })
    categoryId: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    theme_name: string;

    @Column({ nullable: false })
    active: boolean;

    @Column({ nullable: false })
    deleted: boolean;
}
