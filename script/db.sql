CREATE TABLE `temp`.`country` (
  `pk_country_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL DEFAULT '',
  `short_name` VARCHAR(45) NOT NULL DEFAULT '',
  `mobile_code` VARCHAR(45) NOT NULL DEFAULT '',
  `deleted` BIT NOT NULL DEFAULT false,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`pk_country_id`));
