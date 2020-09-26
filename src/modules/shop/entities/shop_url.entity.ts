import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class ShopUrl extends Datecolumn {

    @Column({ type: 'int', nullable: false })
    id_shop: number;

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
