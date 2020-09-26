import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsers1601148452370 implements MigrationInterface {
    name = 'createUsers1601148452370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `profile` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `lang` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(32) NOT NULL, `active` tinyint NOT NULL DEFAULT 1, `iso_code` varchar(2) NOT NULL, `language_code` varchar(5) NOT NULL, `locale` varchar(5) NOT NULL, `date_format_lite` varchar(32) NOT NULL, `date_format_full` varchar(32) NOT NULL, `is_rtl` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `firstname` varchar(100) NOT NULL, `lastname` varchar(100) NOT NULL, `username` varchar(25) NOT NULL, `email` varchar(100) NOT NULL, `password` varchar(255) NOT NULL, `last_password_gen` timestamp NULL DEFAULT 'CURRENT_TIMESTAMP', `stats_date_from` date NULL, `stats_date_to` date NULL, `stats_compare_from` date NULL, `stats_compare_to` date NULL, `stats_compare_option` int NOT NULL DEFAULT 1, `preselect_data_range` varchar(32) NULL, `bo_color` varchar(32) NULL, `bo_theme` varchar(32) NULL, `bo_css` varchar(64) NULL, `default_tab` int NOT NULL DEFAULT 0, `bo_width` int NOT NULL DEFAULT 0, `bo_menu` tinyint NOT NULL DEFAULT 1, `active` tinyint NOT NULL DEFAULT 1, `optin` tinyint NOT NULL DEFAULT 0, `id_last_order` int NOT NULL DEFAULT 0, `id_last_customer_message` int NOT NULL DEFAULT 0, `id_last_customer` int NOT NULL DEFAULT 0, `last_connection_date` date NULL, `reset_password_token` varchar(40) NULL, `reset_password_validity` datetime NULL, `langId` int NULL, `profileId` int NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), UNIQUE INDEX `REL_29c419430545ab3e4198e83af7` (`langId`), UNIQUE INDEX `REL_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `shop` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id_shop_group` int NOT NULL, `name` varchar(64) NOT NULL, `id_category` int NOT NULL, `theme_name` varchar(255) NOT NULL, `active` tinyint NOT NULL, `deleted` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `lang_shop` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `on_sale` tinyint NOT NULL DEFAULT 1, `online_only` tinyint NOT NULL DEFAULT 1, `ean13` varchar(13) NULL, `isbn` varchar(32) NULL, `upc` varchar(12) NULL, `ecotax` decimal NOT NULL DEFAULT 0, `quantity` int NOT NULL DEFAULT 0, `minimal_quantity` int NOT NULL DEFAULT 1, `low_stock_threshold` int NULL, `low_stock_alert` tinyint NOT NULL DEFAULT true, `price` decimal NOT NULL DEFAULT 0, `whosale_price` decimal NOT NULL DEFAULT 0, `unity` varchar(255) NULL, `unity_price_ratio` decimal NOT NULL DEFAULT 0, `additional_shipping_cost` decimal NOT NULL DEFAULT 0, `reference` varchar(64) NULL, `supplier_reference` varchar(64) NULL, `location` varchar(64) NULL, `width` decimal NOT NULL DEFAULT 0, `height` decimal NOT NULL DEFAULT 0, `depth` decimal NOT NULL DEFAULT 0, `weight` decimal NOT NULL DEFAULT 0, `out_of_stock` int NOT NULL DEFAULT 2, `additional_delivery_times` tinyint NOT NULL DEFAULT false, `quantity_discount` tinyint NULL DEFAULT true, `customizable` int NOT NULL DEFAULT 0, `uploadable_files` int NOT NULL DEFAULT 0, `text_fields` int NOT NULL DEFAULT 0, `active` tinyint NOT NULL DEFAULT true, `redirect_type` varchar(3) NOT NULL DEFAULT , `id_type_redirected` int NOT NULL DEFAULT 0, `available_for_order` tinyint NOT NULL DEFAULT false, `shopDefaultId` int NULL, UNIQUE INDEX `REL_238b522f68c77dcaaa9c0c800a` (`shopDefaultId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product_lang` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `description` text NULL, `description_short` text NULL, `link_rewrite` varchar(128) NOT NULL, `meta_description` varchar(512) NULL, `meta_keywords` varchar(255) NULL, `meta_title` varchar(128) NULL, `name` varchar(128) NOT NULL, `available_now` varchar(255) NULL, `available_later` varchar(255) NULL, `delivery_in_stock` varchar(255) NULL, `delivery_out_stock` varchar(255) NULL, `productId` int NULL, `shopId` int NULL, `langId` int NULL, UNIQUE INDEX `REL_50efc0509bad1f7f000cda6dab` (`productId`), UNIQUE INDEX `REL_e7bd67c19299f44246518a3dd8` (`shopId`), UNIQUE INDEX `REL_4b6482605339a2cfd2eedcdbb4` (`langId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product_shop` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id_category_default` int NULL, `id_tax_rules_group` int NOT NULL, `on_sale` tinyint NOT NULL DEFAULT 1, `online_only` tinyint NOT NULL DEFAULT 1, `ecotax` decimal NOT NULL DEFAULT 0, `minimal_quantity` int NOT NULL DEFAULT 1, `low_stock_threshold` int NULL, `low_stock_alert` tinyint NOT NULL DEFAULT 1, `price` decimal NOT NULL DEFAULT 0, `whosale_price` decimal NOT NULL DEFAULT 0, `unity` varchar(255) NULL, `unity_price_ratio` decimal NOT NULL DEFAULT 0, `additional_shipping_cost` decimal NOT NULL DEFAULT 0, `customizable` int NOT NULL DEFAULT 0, `uploadable_files` int NOT NULL DEFAULT 0, `text_files` int NOT NULL DEFAULT 0, `active` tinyint NOT NULL DEFAULT 1, `redirect_type` varchar(3) NOT NULL DEFAULT '', `id_type_redirected` int NOT NULL DEFAULT 0, `available_for_order` tinyint NOT NULL DEFAULT 0, `available_date` date NULL, `show_condition` tinyint NOT NULL DEFAULT 0, `condition` varchar(10) NOT NULL DEFAULT 'new', `show_price` tinyint NOT NULL DEFAULT 0, `indexed` tinyint NOT NULL DEFAULT 1, `visibility` varchar(10) NOT NULL DEFAULT 'both', `cache_default_attribute` int NULL, `advanced_stock_management` tinyint NOT NULL DEFAULT 1, `pack_stock_type` int NOT NULL DEFAULT 3, `productId` int NULL, `shopId` int NULL, UNIQUE INDEX `REL_5e0cbb6cc3dbef0129ce171fed` (`productId`), UNIQUE INDEX `REL_37192427b839dcf3ac5228d9e6` (`shopId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `shop_group` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(64) NOT NULL, `share_customer` tinyint NOT NULL, `share_order` tinyint NOT NULL, `share_stock` tinyint NOT NULL, `active` tinyint NOT NULL, `deleted` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `shop_url` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id_shop` int NOT NULL, `domain` varchar(150) NOT NULL, `domain_ssl` varchar(150) NOT NULL, `physical_uri` varchar(64) NOT NULL, `virtual_uri` varchar(64) NOT NULL, `main` tinyint NOT NULL, `active` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_shop` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_29c419430545ab3e4198e83af7e` FOREIGN KEY (`langId`) REFERENCES `lang`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_238b522f68c77dcaaa9c0c800a0` FOREIGN KEY (`shopDefaultId`) REFERENCES `shop`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_lang` ADD CONSTRAINT `FK_50efc0509bad1f7f000cda6dab9` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_lang` ADD CONSTRAINT `FK_e7bd67c19299f44246518a3dd89` FOREIGN KEY (`shopId`) REFERENCES `shop`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_lang` ADD CONSTRAINT `FK_4b6482605339a2cfd2eedcdbb4b` FOREIGN KEY (`langId`) REFERENCES `lang`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_shop` ADD CONSTRAINT `FK_5e0cbb6cc3dbef0129ce171fedd` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_shop` ADD CONSTRAINT `FK_37192427b839dcf3ac5228d9e6d` FOREIGN KEY (`shopId`) REFERENCES `shop`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_shop` DROP FOREIGN KEY `FK_37192427b839dcf3ac5228d9e6d`");
        await queryRunner.query("ALTER TABLE `product_shop` DROP FOREIGN KEY `FK_5e0cbb6cc3dbef0129ce171fedd`");
        await queryRunner.query("ALTER TABLE `product_lang` DROP FOREIGN KEY `FK_4b6482605339a2cfd2eedcdbb4b`");
        await queryRunner.query("ALTER TABLE `product_lang` DROP FOREIGN KEY `FK_e7bd67c19299f44246518a3dd89`");
        await queryRunner.query("ALTER TABLE `product_lang` DROP FOREIGN KEY `FK_50efc0509bad1f7f000cda6dab9`");
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_238b522f68c77dcaaa9c0c800a0`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_29c419430545ab3e4198e83af7e`");
        await queryRunner.query("DROP TABLE `user_shop`");
        await queryRunner.query("DROP TABLE `shop_url`");
        await queryRunner.query("DROP TABLE `shop_group`");
        await queryRunner.query("DROP INDEX `REL_37192427b839dcf3ac5228d9e6` ON `product_shop`");
        await queryRunner.query("DROP INDEX `REL_5e0cbb6cc3dbef0129ce171fed` ON `product_shop`");
        await queryRunner.query("DROP TABLE `product_shop`");
        await queryRunner.query("DROP INDEX `REL_4b6482605339a2cfd2eedcdbb4` ON `product_lang`");
        await queryRunner.query("DROP INDEX `REL_e7bd67c19299f44246518a3dd8` ON `product_lang`");
        await queryRunner.query("DROP INDEX `REL_50efc0509bad1f7f000cda6dab` ON `product_lang`");
        await queryRunner.query("DROP TABLE `product_lang`");
        await queryRunner.query("DROP INDEX `REL_238b522f68c77dcaaa9c0c800a` ON `product`");
        await queryRunner.query("DROP TABLE `product`");
        await queryRunner.query("DROP TABLE `lang_shop`");
        await queryRunner.query("DROP TABLE `shop`");
        await queryRunner.query("DROP INDEX `REL_9466682df91534dd95e4dbaa61` ON `user`");
        await queryRunner.query("DROP INDEX `REL_29c419430545ab3e4198e83af7` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `lang`");
        await queryRunner.query("DROP TABLE `profile`");
    }

}
