import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class Shop extends Datecolumn {

    @Column({ type: 'int', nullable: false })
    id_shop_group: number;

    @Column({ type: 'varchar', length: 64, nullable: false })
    name: string;

    @Column({ type: 'int', nullable: false })
    id_category: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    theme_name: string;

    @Column({ nullable: false })
    active: boolean;

    @Column({ nullable: false })
    deleted: boolean;

}
