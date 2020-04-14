CREATE TABLE `users` (
	`id` INT(5) NOT NULL  primary KEY auto_increment,
	`name` VARCHAR(50) NOT NULL,
	`displayname` VARCHAR(50),
	`imageurl` varchar(200),
	`createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`email` VARCHAR(100) NOT NULL,
	`mobileno` INT(20) zerofill,
	`loginId` VARCHAR(30),
	KEY `userinfo` (`id`,`loginId`) USING BTREE
) ENGINE=InnoDB;

CREATE TABLE `conversation_header` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_type` VARCHAR(20) DEFAULT NULL,
	`is_online` boolean default true,
	`isconnectedtoagent` boolean default false,
	`notification` boolean default false,
	`unread_message` INT(3) zerofill,
	`user_id` VARCHAR(30),
	`agent_id` VARCHAR(30) DEFAULT NULL,
	`createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `conversation` (
	`id` INT(5) NOT NULL  primary KEY auto_increment,
	`user_id` VARCHAR(50) NOT NULL,
	`message` JSON,
	`createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE `application_access` (
	`id` INT(5) NOT NULL primary KEY auto_increment,
	`user_id` VARCHAR(50) NOT NULL,
	`roles` VARCHAR(100) default NULL,
	`createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE `agent_header` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`agent_id` VARCHAR(20) DEFAULT NULL,
	`is_online` boolean default true,
	`status` VARCHAR(50) DEFAULT "Online",
    `skin_id` INT(5) default 0,
	`createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `chat_skin` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`theme` json NOT NULL,
	`is_agent` boolean DEFAULT FALSE,
	`createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB;