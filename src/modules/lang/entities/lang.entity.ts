import { Column, Entity } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class Lang extends Datecolumn {

    @Column({ type: 'varchar', unique: true, length: 32, nullable: false })
    name: string;

    @Column({ default: 1, nullable: false })
    active: boolean;

    @Column({ type: 'varchar', unique: true, length: 2, nullable: false })
    iso_code: string;

    @Column({ type: 'varchar', unique: true, length: 5, nullable: false })
    language_code: string;

    @Column({ type: 'varchar', unique: true, length: 5, nullable: false })
    locale: string;

    @Column({ type: 'varchar', length: 32, nullable: false })
    date_format_lite: string;

    @Column({ type: 'varchar', length: 32, nullable: false })
    date_format_full: string;

    @Column({ default: 0, nullable: false })
    is_rtl: boolean;

}
