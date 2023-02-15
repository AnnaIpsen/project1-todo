var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('createUser');
});

const { body, validationResult } = require("express-validator");
const crypto = require('crypto-js');

router.post("/create", 
 body("email").isEmail().blacklist("'").blacklist(" ").blacklist("-"),
 body("username").isLength({min: 6}).isAlphanumeric().blacklist("'").blacklist(" ").blacklist("-"), 
 body("password").isLength({min: 6}).blacklist("'").blacklist(" ").blacklist("-"),
 (req, res) =>{

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    let username = req.body.username;
    let password = req.body.password;

    let salt = crypto.lib.WordArray.random(10).toString();

    let hashedUsername = crypto.SHA256(username + salt).toString();
    let hashedPassword = crypto.SHA256(password + salt).toString();

    console.log('Hashed username:', hashedUsername);
    console.log('Hashed password:', hashedPassword);
  res.render("createUser")

});

module.exports = router;
