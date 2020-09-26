import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProfileLang{
    @PrimaryColumn({ type: 'integer', nullable: false, unsigned: true })
    langId: number;

    @PrimaryColumn({ type: 'integer', nullable: false, unsigned: true })
    profileId: number;

    @Column({ type: 'varchar', nullable: false, length: 128 })
    name: string;
}