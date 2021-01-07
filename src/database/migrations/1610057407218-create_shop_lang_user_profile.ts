import {MigrationInterface, QueryRunner} from "typeorm";

export class createShopLangUserProfile1610057407218 implements MigrationInterface {
    name = 'createShopLangUserProfile1610057407218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `configuration` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id_shop` int NOT NULL, `id_shop_group` int NOT NULL, `name` varchar(100) NOT NULL, `value` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `lang` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(32) NOT NULL, `active` tinyint NOT NULL DEFAULT 1, `iso_code` varchar(2) NOT NULL, `language_code` varchar(5) NOT NULL, `locale` varchar(5) NOT NULL, `date_format_lite` varchar(32) NOT NULL, `date_format_full` varchar(32) NOT NULL, `is_rtl` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX `IDX_04d5d3a9b8a557ea304b3c38e3` (`name`), UNIQUE INDEX `IDX_17af8b4c6f77e13634d21f04fd` (`iso_code`), UNIQUE INDEX `IDX_4674a07328cefb2c3232870669` (`language_code`), UNIQUE INDEX `IDX_1261c2297e4d150e9cb32bda22` (`locale`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile_lang` (`langId` int UNSIGNED NOT NULL, `name` varchar(128) NOT NULL, `profileId` int NULL, PRIMARY KEY (`langId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `shop_group` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(64) NOT NULL, `share_customer` tinyint NOT NULL, `share_order` tinyint NOT NULL, `share_stock` tinyint NOT NULL, `active` tinyint NOT NULL, `deleted` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `shop` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(64) NOT NULL, `categoryId` int NOT NULL, `theme_name` varchar(255) NOT NULL, `active` tinyint NOT NULL, `deleted` tinyint NOT NULL, `shopGroupId` int NULL, UNIQUE INDEX `REL_aae01385607a0ba88168b13f9d` (`shopGroupId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `shop_url` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `domain` varchar(150) NOT NULL, `domain_ssl` varchar(150) NOT NULL, `physical_uri` varchar(64) NOT NULL, `virtual_uri` varchar(64) NOT NULL, `main` tinyint NOT NULL, `active` tinyint NOT NULL, `shopId` int NULL, UNIQUE INDEX `REL_31c9f8da758eb3199d31a18fed` (`shopId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `firstname` varchar(100) NOT NULL, `lastname` varchar(100) NOT NULL, `username` varchar(25) NOT NULL, `email` varchar(100) NOT NULL, `password` varchar(255) NOT NULL, `active` tinyint NOT NULL DEFAULT 1, `langId` int NULL, `profileId` int NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), UNIQUE INDEX `REL_29c419430545ab3e4198e83af7` (`langId`), UNIQUE INDEX `REL_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `profile_lang` ADD CONSTRAINT `FK_5eae3f73f6fde2d73abc101f088` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `shop` ADD CONSTRAINT `FK_aae01385607a0ba88168b13f9da` FOREIGN KEY (`shopGroupId`) REFERENCES `shop_group`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `shop_url` ADD CONSTRAINT `FK_31c9f8da758eb3199d31a18fed8` FOREIGN KEY (`shopId`) REFERENCES `shop`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_29c419430545ab3e4198e83af7e` FOREIGN KEY (`langId`) REFERENCES `lang`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_29c419430545ab3e4198e83af7e`");
        await queryRunner.query("ALTER TABLE `shop_url` DROP FOREIGN KEY `FK_31c9f8da758eb3199d31a18fed8`");
        await queryRunner.query("ALTER TABLE `shop` DROP FOREIGN KEY `FK_aae01385607a0ba88168b13f9da`");
        await queryRunner.query("ALTER TABLE `profile_lang` DROP FOREIGN KEY `FK_5eae3f73f6fde2d73abc101f088`");
        await queryRunner.query("DROP INDEX `REL_9466682df91534dd95e4dbaa61` ON `user`");
        await queryRunner.query("DROP INDEX `REL_29c419430545ab3e4198e83af7` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP INDEX `REL_31c9f8da758eb3199d31a18fed` ON `shop_url`");
        await queryRunner.query("DROP TABLE `shop_url`");
        await queryRunner.query("DROP INDEX `REL_aae01385607a0ba88168b13f9d` ON `shop`");
        await queryRunner.query("DROP TABLE `shop`");
        await queryRunner.query("DROP TABLE `shop_group`");
        await queryRunner.query("DROP TABLE `profile`");
        await queryRunner.query("DROP TABLE `profile_lang`");
        await queryRunner.query("DROP INDEX `IDX_1261c2297e4d150e9cb32bda22` ON `lang`");
        await queryRunner.query("DROP INDEX `IDX_4674a07328cefb2c3232870669` ON `lang`");
        await queryRunner.query("DROP INDEX `IDX_17af8b4c6f77e13634d21f04fd` ON `lang`");
        await queryRunner.query("DROP INDEX `IDX_04d5d3a9b8a557ea304b3c38e3` ON `lang`");
        await queryRunner.query("DROP TABLE `lang`");
        await queryRunner.query("DROP TABLE `configuration`");
    }

}
