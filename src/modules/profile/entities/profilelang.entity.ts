import { Profile } from './profile.entity';
import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";

@Entity()
export class ProfileLang {
    @PrimaryColumn({ type: 'integer', unsigned: true })
    langId: number;

    @Column({ type: 'varchar', nullable: false, length: 128 })
    name: string;

    @ManyToOne(() => Profile, profile => profile.profile_lang)
    profile: Profile;
}