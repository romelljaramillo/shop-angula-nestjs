import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class Configuration extends Datecolumn {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column({ type: 'int'})
  id_shop: number;

  @Column({ type: 'int'})
  id_shop_group: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  value: string;
}