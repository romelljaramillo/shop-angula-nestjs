import { User } from "../../users/entities/user.entity";
import { Column, PrimaryGeneratedColumn, OneToOne, Entity } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class Lang extends Datecolumn {

    @Column({ type: 'varchar', length: 32, nullable: false })
    name: string;

    @Column({ default: true })
    active: boolean;

    @Column({ type: 'varchar', length: 2, nullable: false })
    iso_code: string;

    @Column({ type: 'varchar', length: 5, nullable: false })
    language_code: string;

    @Column({ type: 'varchar', length: 5, nullable: false })
    locale: string;

    @Column({ type: 'varchar', length: 32, nullable: false })
    date_format_lite: string;

    @Column({ type: 'varchar', length: 32, nullable: false })
    date_format_full: string;

    @Column({ default: true })
    is_rtl: boolean;

    @OneToOne(type => User, user => user.lang) // specify inverse side as a second parameter
    user: User;

}
