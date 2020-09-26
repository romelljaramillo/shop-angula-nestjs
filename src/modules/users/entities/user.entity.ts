import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "../../profile/entities/profile.entity";
import { Lang } from "../../lang/entities/lang.entity";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class User extends Datecolumn {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(type => Lang, lang => lang.user) // specify inverse side as a second parameter
  @JoinColumn()
  lang: Lang;
  
  @OneToOne(type => Profile, profile => profile.user) // specify inverse side as a second parameter
  @JoinColumn()
  profile: Profile;

  @Column({ type: 'varchar', length: 100, nullable: false })
  firstname: string;

  @Column({ type: 'varchar', length: 100 })
  lastname: string;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  last_password_gen: Date;

  @Column({ type: 'date', nullable: true })
  stats_date_from: Date;

  @Column({ type: 'date', nullable: true })
  stats_date_to: Date;

  @Column({ type: 'date', nullable: true })
  stats_compare_from: Date;

  @Column({ type: 'date', nullable: true })
  stats_compare_to: Date;

  @Column({ type: 'int', nullable: false, default: () => 1 })
  stats_compare_option: number;

  @Column({ type: 'varchar', length: 32, nullable: true })
  preselect_data_range: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  bo_color: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  bo_theme: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  bo_css: string;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  default_tab: number;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  bo_width: number;

  @Column({ type: 'tinyint', nullable: false, default: () => 1 })
  bo_menu: number;

  @Column({ default: true })
  active: boolean;

  @Column({ type: 'tinyint', nullable: false, default: () => 0 })
  optin: number;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  id_last_order: number;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  id_last_customer_message: number;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  id_last_customer: number;

  @Column({ type: 'date', nullable: true })
  last_connection_date: Date;

  @Column({ type: 'varchar', length: 40, nullable: true })
  reset_password_token: string;

  @Column({ type: 'datetime', nullable: true })
  reset_password_validity: Date;

}