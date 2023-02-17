var express = require('express');
var router = express.Router();
let mysql = require('mysql');
const {body, validationResult} = require("express-validator");
const crypto = require('crypto-js');

let connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME
})

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('login');
});


router.post("/login",
    body("loginUsername").isLength({min: 6}).isAlphanumeric().blacklist("'").blacklist(" ").blacklist("-"),
    body("loginPassword").isLength({min: 6}).blacklist("'").blacklist(" ").blacklist("-"),
    (req, res) => {
        console.log("This is the req: " + req.body.loginUsername)

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({errors: errors.array()});
        }

        let loginUsername = req.body.loginUsername;
        let loginPassword = req.body.loginPassword;

        let salt = crypto.lib.WordArray.random(128 / 8).toString();

        let saltetLoginUsername = (loginUsername + salt).toString();


        // First check if there's a match on username in database,
        // If yes, then get saltkey
        let saltKeyQuery = "SELECT saltKey FROM users WHERE Username = ?";

        connection.query(saltKeyQuery, [loginUsername]), function (err, result, fields) {
            if (err) throw (err);
            console.log("SaltKey: " + result);
            console.log("this is the result from LoginQuery: " + result)
        };

        //Second, Salt and hash the password from req.body
        let hashedLoginPassword = crypto.SHA256(loginPassword + salt).toString();

        //Third, check if the hashed password matches the hashed password in database
        let checkUserPasswordQuery = 'SELECT Password FROM users WHERE Username = ?'

        connection.query(checkUserPasswordQuery, [hashedLoginPassword]), (err, res) => {
            if (err) throw (err);
            console.log(res);
        }

        //Fourth, if there's a match, user will be logged in
        if (saltetLoginUsername === loginUsername && hashedLoginPassword === loginPassword) {
            return res.render("taskOverview");
        } else {
            return res.status(400).json({error: 'Invalid username and password'})


            //

            // User.findOne({ loginUsername, loginEmail })
            // .then(user => {
            //     if (!user) return res.status(400).json({ msg: "User not exist" })
            //
            //     //if user exist than compare password
            //     //password comes from the user
            //     //user.password comes from the database
            //     crypto.compare(loginUsername, user.username, loginPassword, user.password, (err, data) => {
            //         //if error than throw error
            //         if (err) throw err
            //
            //         //if both match than you can do anything
            //         if (data) {
            //             return res.status(200).json({ msg: "Login success" })
            //         } else {
            //             return res.status(401).json({ msg: "Invalid credencial" })
            //         }
            //     res.redirect("/taskOverview")
            //
            //     });
            // });


        }

    });

        module.exports = router;