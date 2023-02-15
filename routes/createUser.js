var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('createUser');
});

const { body, validationResult } = require("express-validator");


router.post("/create", 
 body("email").isEmail().blacklist("'"),
 body("username").isLength({min: 6}).isAlphanumeric().blacklist("'").blacklist(" "), 
 body("password").blacklist("'").blacklist(" "),
 (req, res) =>{

  // body("username", "not valid").isLength({min: 6}).escape(),
  // body("password", "not valid").isLength({min: 6}).escape()
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
  res.render("index")

});

module.exports = router;
