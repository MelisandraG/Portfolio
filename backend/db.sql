drop database `portfolio`;
create database `portfolio`;
use `portfolio`;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(80) UNIQUE NOT NULL,
    `hashedPassword` varchar(300) NOT NULL,
    `role` VARCHAR(40) DEFAULT 'user',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
INSERT INTO
  `users`
VALUES
  (
    1,
    'melisandra.goncalves@gmail.com',
    '$2a$12$3LTLmyhYDggmhPio9elUBeJ6KthojqiFRij66iDNoG4DsVP.VeGfO',
    DEFAULT
  );

CREATE TABLE `project` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(80) UNIQUE NOT NULL,
    `subtitle` VARCHAR(80) UNIQUE NOT NULL,
    `description` VARCHAR(300) UNIQUE NOT NULL,
    `technologies` VARCHAR(300) UNIQUE NOT NULL,
    `image`VARCHAR(300) not null,
    `link` varchar(300) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
INSERT INTO
  `project`
VALUES
  (
    1,
    'MaCheFai',
    'Italian recipes website',
    'This site aims to help people discover and share Italian recipes. User can search, filter recipes and add a new recipe. Project made at the wild code school bootcamp.',
    'JavaScript; HTML; CSS;',
    'https://i.ibb.co/chLHnCx/machefai.png',
    'https://portfolio-737fc.web.app/'
  );
INSERT INTO
  `project`
VALUES
  (
    2,
    'Wild-league App',
    'Football card website',
    'Website dedicated to Premier League fans. Users can store their favorite players carts and build a team. Project done at wild code school bootcamp.',
    'JavaScript; REACT; CSS; API;',
    'https://i.ibb.co/xmY1RHm/wild.png',
    'https://wild-league.netlify.app/'
  );