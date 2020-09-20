-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.26 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para prestashop1765
CREATE DATABASE IF NOT EXISTS `prestashop1765` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `prestashop1765`;

-- Volcando estructura para tabla prestashop1765.ps_customer
CREATE TABLE IF NOT EXISTS `ps_customer` (
  `id_customer` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_shop_group` int(11) unsigned NOT NULL DEFAULT '1',
  `id_shop` int(11) unsigned NOT NULL DEFAULT '1',
  `id_gender` int(10) unsigned NOT NULL,
  `id_default_group` int(10) unsigned NOT NULL DEFAULT '1',
  `id_lang` int(10) unsigned DEFAULT NULL,
  `id_risk` int(10) unsigned NOT NULL DEFAULT '1',
  `company` varchar(255) DEFAULT NULL,
  `siret` varchar(14) DEFAULT NULL,
  `ape` varchar(5) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  `last_passwd_gen` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `birthday` date DEFAULT NULL,
  `newsletter` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ip_registration_newsletter` varchar(15) DEFAULT NULL,
  `newsletter_date_add` datetime DEFAULT NULL,
  `optin` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `website` varchar(128) DEFAULT NULL,
  `outstanding_allow_amount` decimal(20,6) NOT NULL DEFAULT '0.000000',
  `show_public_prices` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `max_payment_days` int(10) unsigned NOT NULL DEFAULT '60',
  `secure_key` varchar(32) NOT NULL DEFAULT '-1',
  `note` text,
  `active` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `is_guest` tinyint(1) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `date_add` datetime NOT NULL,
  `date_upd` datetime NOT NULL,
  `reset_password_token` varchar(40) DEFAULT NULL,
  `reset_password_validity` datetime DEFAULT NULL,
  PRIMARY KEY (`id_customer`),
  KEY `customer_email` (`email`),
  KEY `customer_login` (`email`,`passwd`),
  KEY `id_customer_passwd` (`id_customer`,`passwd`),
  KEY `id_gender` (`id_gender`),
  KEY `id_shop_group` (`id_shop_group`),
  KEY `id_shop` (`id_shop`,`date_add`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla prestashop1765.ps_customer: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `ps_customer` DISABLE KEYS */;
REPLACE INTO `ps_customer` (`id_customer`, `id_shop_group`, `id_shop`, `id_gender`, `id_default_group`, `id_lang`, `id_risk`, `company`, `siret`, `ape`, `firstname`, `lastname`, `email`, `passwd`, `last_passwd_gen`, `birthday`, `newsletter`, `ip_registration_newsletter`, `newsletter_date_add`, `optin`, `website`, `outstanding_allow_amount`, `show_public_prices`, `max_payment_days`, `secure_key`, `note`, `active`, `is_guest`, `deleted`, `date_add`, `date_upd`, `reset_password_token`, `reset_password_validity`) VALUES
	(1, 1, 1, 1, 3, 1, 0, '', '', '', 'Anonymous', 'Anonymous', 'anonymous@psgdpr.com', 'prestashop', '2020-04-20 10:37:12', '0000-00-00', 0, '', '0000-00-00 00:00:00', 1, '', 0.000000, 0, 0, '4a6f2bb86b61e3ff1485fb2afa842e00', '', 0, 0, 0, '2020-04-20 16:37:12', '2020-04-20 16:37:12', '', '0000-00-00 00:00:00'),
	(2, 1, 1, 1, 3, 1, 0, NULL, NULL, NULL, 'John', 'DOE', 'pub@prestashop.com', '396a75a3337ca0c1af8bf15dd4bc9e7c', '2020-04-20 10:38:44', '1970-01-15', 0, NULL, '2013-12-13 08:19:15', 1, NULL, 0.000000, 0, 0, '7991a84fe2e374b46eb3de8d721600ce', NULL, 1, 0, 0, '2020-04-20 16:38:44', '2020-05-17 19:00:21', NULL, '0000-00-00 00:00:00'),
	(3, 1, 1, 1, 3, 1, 0, NULL, NULL, NULL, 'romell', 'jaramillo', 'romelljaramillo@gmail.com', '$2y$10$lxS/28gvvfWMptjZ0NvACeR6cecX2lE3Vd0CmIm04QvPj0OoTazgy', '2020-04-28 15:10:33', '0000-00-00', 1, NULL, '2020-05-17 19:03:29', 1, NULL, 0.000000, 0, 0, '799ae9ffda9448a8d70fc6103ab7236b', NULL, 1, 0, 0, '2020-04-28 21:10:33', '2020-05-17 19:03:29', NULL, '0000-00-00 00:00:00'),
	(5, 1, 1, 0, 3, 1, 1, NULL, NULL, NULL, 'OPC PTS Not Delete', 'OPC PTS Not Delete', 'noreply@prestashop1765.devel', '6f7fca30b037d816a95b993dcd02aa20', '2020-05-02 14:40:07', '0000-00-00', 0, NULL, NULL, 0, NULL, 0.000000, 0, 60, '01c2f04cbb66d8441dd95cd797704876', NULL, 0, 0, 1, '2020-05-02 14:40:07', '2020-05-02 14:40:07', NULL, NULL);
/*!40000 ALTER TABLE `ps_customer` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
