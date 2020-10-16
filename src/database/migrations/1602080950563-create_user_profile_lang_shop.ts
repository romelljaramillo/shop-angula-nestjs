import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserProfileLangShop1602080950563 implements MigrationInterface {
    name = 'createUserProfileLangShop1602080950563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `lang` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(32) NOT NULL, `active` tinyint NOT NULL DEFAULT 1, `iso_code` varchar(2) NOT NULL, `language_code` varchar(5) NOT NULL, `locale` varchar(5) NOT NULL, `date_format_lite` varchar(32) NOT NULL, `date_format_full` varchar(32) NOT NULL, `is_rtl` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile_lang` (`langId` int UNSIGNED NOT NULL, `name` varchar(128) NOT NULL, `profileId` int NULL, PRIMARY KEY (`langId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `shop` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(64) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `firstname` varchar(100) NOT NULL, `lastname` varchar(100) NOT NULL, `username` varchar(25) NOT NULL, `email` varchar(100) NOT NULL, `password` varchar(255) NOT NULL, `active` tinyint NOT NULL DEFAULT 1, `langId` int NULL, `profileId` int NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), UNIQUE INDEX `REL_29c419430545ab3e4198e83af7` (`langId`), UNIQUE INDEX `REL_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `profile_lang` ADD CONSTRAINT `FK_5eae3f73f6fde2d73abc101f088` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_29c419430545ab3e4198e83af7e` FOREIGN KEY (`langId`) REFERENCES `lang`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_29c419430545ab3e4198e83af7e`");
        await queryRunner.query("ALTER TABLE `profile_lang` DROP FOREIGN KEY `FK_5eae3f73f6fde2d73abc101f088`");
        await queryRunner.query("DROP INDEX `REL_9466682df91534dd95e4dbaa61` ON `user`");
        await queryRunner.query("DROP INDEX `REL_29c419430545ab3e4198e83af7` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `shop`");
        await queryRunner.query("DROP TABLE `profile`");
        await queryRunner.query("DROP TABLE `profile_lang`");
        await queryRunner.query("DROP TABLE `lang`");
    }

}
