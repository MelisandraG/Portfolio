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


CREATE TABLE `skills` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(80) UNIQUE NOT NULL,
    `image` VARCHAR(300) not null,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

  INSERT INTO
  `skills`
VALUES
  (
    1,
    'HTML5',
    'https://i.ibb.co/V9wgfMh/html.png'
  ),
  (
    2,
    'CSS3',
    'https://i.ibb.co/8bPCBd5/logo-css-3-2048.png'
  ),
  (
    3,
    'Javascript',
    'https://i.ibb.co/FnpKJGP/javascript.png'
  ),
  (
    4,
    'Visual Studio Code',
    'https://i.ibb.co/QHGN3X8/vs.png'
  ),
  (
    5,
    'GitHub',
    'https://i.ibb.co/BjZkFWd/github.png'
  ),
  (
    6,
    'ReactJS',
    'https://i.ibb.co/2dfrBbN/640px-React-svg.png'
  ),
  (
    7,
    'NodeJS',
    'https://i.ibb.co/6DCHGXP/nodejs.jpg'
  ),
  (
    8,
    'ExpressJS',
    'https://i.ibb.co/fXYnJ9m/Expressjs.png'
  ),
  (
    9,
    'SQL | MySQL',
    'https://i.ibb.co/y6gbXyK/mysql.png'
  ),
  (
    10,
    'Postman',
    'https://i.ibb.co/hyWHLjc/postman.png'
  );


