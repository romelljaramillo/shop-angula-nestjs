import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { Shop } from "./shop.entity";

@Entity()
export class ShopUrl extends Datecolumn {

    @OneToOne(type => Shop) // specify inverse side as a second parameter
    @JoinColumn()
    shop: Shop;

    @Column({ type: 'varchar', length: 150, nullable: false })
    domain: string;

    @Column({ type: 'varchar', length: 150, nullable: false })
    domain_ssl: string;
    
    @Column({ type: 'varchar', length: 64, nullable: false })
    physical_uri: string;

    @Column({ type: 'varchar', length: 64, nullable: false })
    virtual_uri: string;

    @Column({ nullable: false })
    main: boolean;

    @Column({ nullable: false })
    active: boolean;
}