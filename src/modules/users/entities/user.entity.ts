import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
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

  @Column({ default: true })
  active: boolean;

}