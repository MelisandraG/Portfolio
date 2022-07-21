drop database `portfolio`;
create database `portfolio`;
use `portfolio`;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(80) UNIQUE NOT NULL,
    `hashedPassword` varchar(300) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
INSERT INTO
  `users`
VALUES
  (
    1,
    'melisandra.goncalves@gmail.com',
    '$2a$12$3LTLmyhYDggmhPio9elUBeJ6KthojqiFRij66iDNoG4DsVP.VeGfO'
  );

CREATE TABLE `project` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(80) UNIQUE NOT NULL,
    `subtitle` VARCHAR(80) UNIQUE NOT NULL,
    `description` VARCHAR(300) UNIQUE NOT NULL,
    `image`VARCHAR(300) not null,
    `link` varchar(80) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
INSERT INTO
  `project`
VALUES
  (
    1,
    'React Reserve',
    'MERN Stack',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    'https://i.ibb.co/chLHnCx/machefai.png',
    'https://portfolio-737fc.web.app/'
  );
