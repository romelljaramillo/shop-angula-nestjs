import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class Shop extends Datecolumn {

    @Column({ type: 'varchar', length: 64, nullable: false })
    name: string;

}
