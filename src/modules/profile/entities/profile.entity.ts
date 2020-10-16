import { ProfileLang } from './profilelang.entity';
import { Entity, OneToMany } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class Profile extends Datecolumn {

    @OneToMany(() => ProfileLang, profile_lang => profile_lang.profile)
    profile_lang: ProfileLang[];

}