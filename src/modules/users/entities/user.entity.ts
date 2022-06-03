import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "../../profile/entities/profile.entity";
import { Lang } from "../../lang/entities/lang.entity";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { Exclude } from "class-transformer";

@Entity()
export class User extends Datecolumn {

  @OneToOne(type => Lang) // specify inverse side as a second parameter
  @JoinColumn()
  lang: Lang;

  @OneToOne(type => Profile) // specify inverse side as a second parameter
  @JoinColumn()
  profile: Profile;

  @Column({ type: 'varchar', length: 100, nullable: false })
  firstname: string;

  @Column({ type: 'varchar', length: 100 })
  lastname: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ default: false })
  active: boolean;
}