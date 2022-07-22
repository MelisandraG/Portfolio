//  Add in the authentication within this file
const authRouter = require("express").Router();
const User = require("../models/user");
const { calculateJWTToken } = require("../helpers/users");
const jwt = require("jsonwebtoken");
const privateKey = process.env.PRIVATE_KEY;
//const Controler = require("../models/emailNotification");

// http://localhost:5000/auth/login
authRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email).then((user) => {
    console.log(user)
    if (user===undefined) res.status(401).send("Email not found");
    else {
      User.verifyPassword(password, user.hashedPassword).then(
        (passwordIsCorrect) => {
          if (passwordIsCorrect) {
            const token = calculateJWTToken(user);
            res.cookie("userportfolio_token", token);
            res.status(202).send(user);
            
          } 
          else res.status(403).send("Wrong password");
        }
      );
    }
  });
});


// http://localhost:5000/auth/verify-token

authRouter.get("/verify-token", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "User needs to login" });

  const decryptToken = jwt.verify(token, privateKey);
  User.findOne(decryptToken.id).then((foundUser) => {

    if (!foundUser) return res.status(404).json({ message: "User not found" });
    res.status(200).send(foundUser);
  });
});

authRouter.get("/logout", (req, res) => {
  // res.cookie("user_token", "", { maxAge: 1 });
  res.status(202).clearCookie("user_token").send("cookie cleared");
});

authRouter.get("/project", (req, res) => {
 
  User.findManyProject()
  .then((results) => {
      res.json(results);
  })
  .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving users from database');
  });
});

authRouter.post("/newProject", (req, res) => {
  console.log(req.body)
  
  User.createProject(req.body)
    .then((createdUser) => {
      res.status(201).json(createdUser);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = authRouter;