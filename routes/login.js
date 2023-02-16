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

    let loginUsername = req.body.loginUsername;
    let loginPassword = req.body.loginPassword;

    User.findOne({ loginUsername, loginEmail })
    .then(user => {
        if (!user) return res.status(400).json({ msg: "User not exist" })

        //if user exist than compare password
        //password comes from the user
        //user.password comes from the database
        crypto.compare(loginUsername, user.username, loginPassword, user.password, (err, data) => {
            //if error than throw error
            if (err) throw err

            //if both match than you can do anything
            if (data) {
                return res.status(200).json({ msg: "Login success" })
            } else {
                return res.status(401).json({ msg: "Invalid credencial" })
            }
            
        });
        res.render("taskOverview")
    });




});

module.exports = router;