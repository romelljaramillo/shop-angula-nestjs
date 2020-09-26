import { User } from "../../users/entities/user.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";

@Entity()
export class Profile extends Datecolumn {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(type => User, user => user.profile) // specify inverse side as a second parameter
    user: User;

}