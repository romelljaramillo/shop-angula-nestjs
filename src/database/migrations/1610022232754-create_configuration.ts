import {MigrationInterface, QueryRunner} from "typeorm";

export class createConfiguration1610022232754 implements MigrationInterface {
    name = 'createConfiguration1610022232754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `configuration` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id_shop_group` int NOT NULL, `id_shop` int NOT NULL, `name` varchar(100) NOT NULL, `value` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `configuration`");
    }

}
