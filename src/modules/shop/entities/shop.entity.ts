import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

export class Shop extends Datecolumn {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 64, nullable: false })
    name: string;

}
