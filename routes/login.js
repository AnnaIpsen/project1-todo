var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

const { body, validationResult } = require("express-validator");
const crypto = require('crypto-js');

router.post("/login", 
 body("loginUsername").isLength({min: 6}).isAlphanumeric().blacklist("'").blacklist(" ").blacklist("-"), 
 body("loginPassword").isLength({min: 6}).blacklist("'").blacklist(" ").blacklist("-"),
 (req, res) =>{

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const loginUsername = req.body.loginUsername;
    const loginPassword = req.body.loginPassword;

    let salt = crypto.lib.WordArray.random(128 / 8).toString();

    let saltetLoginUsername = (loginUsername + salt).toString();
    let hashedLoginPassword = crypto.SHA256(loginPassword + salt).toString();

    if(saltetLoginUsername === loginUsername && hashedLoginPassword === loginPassword){
        return res.render("index");
    }else {
        return res.status(400).json({error:'Invalid username and password'})
    }




});

module.exports = router;