var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

// const { body, validationResult } = require("express-validator");
// const crypto = require('crypto-js');

// router.post("/login", 
//  body("loginUsername").isLength({min: 6}).isAlphanumeric().blacklist("'").blacklist(" ").blacklist("-"), 
//  body("loginPassword").isLength({min: 6}).blacklist("'").blacklist(" ").blacklist("-"),
//  (req, res) =>{

//   const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       console.log(errors);
//       return res.status(400).json({ errors: errors.array() });
//     }

//     let loginUsername = req.body.loginUsername;
//     let loginPassword = req.body.loginPassword;



// });

module.exports = router;