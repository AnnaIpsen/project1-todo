var express = require('express');
var router = express.Router();
let mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('createUser');
});

const {body, validationResult} = require("express-validator");
const crypto = require('crypto-js');

router.post("/create",
    body("email").isEmail().blacklist("'").blacklist(" ").blacklist("-"),
    body("username").isLength({min: 6}).isAlphanumeric().blacklist("'").blacklist(" ").blacklist("-"),
    body("password").isLength({min: 6}).blacklist("'").blacklist(" ").blacklist("-"),
    (req, res) => {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({errors: errors.array()});
      }

      const confirmPass = req.body.confirmPass;
      let password = req.body.password;

      if(password !== confirmPass){
        throw new Error('password is not the same')
        return
      }

      const newUser_username = req.body.username;
      const newUser_password = req.body.password;
      const newUser_email = req.body.email;

      let salt = crypto.lib.WordArray.random(128 / 8).toString();

      let saltUsername = (newUser_username + salt).toString();
      let hashedPassword = crypto.SHA256(newUser_password + salt).toString();


      console.log(req.body)


      //Make connection to Database
      connection.connect();

      //Query to insert all user data into Database
      let userCreateQuery = `INSERT INTO users (username, password,  email, saltKey) VALUES ('${saltUsername}', '${hashedPassword}','${newUser_email}','${salt}')`;

      //Insert Data into Database
      connection.query(userCreateQuery, (err, result) => {

        if (err) throw(err);
        res.render("createUser");


      });
      connection.end();
    })

  module.exports = router;
