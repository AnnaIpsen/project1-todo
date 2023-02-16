const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME
});

//Create a new user
exports.user_create_post = (req, res) => {
    //Variables to hold body properties
    const newUser_username = req.body.username;
    const newUser_password = req.body.password;
    const newUser_email = req.body.email;

    //Make connection to Database
    connection.connect();

    //Query to insert all user data into Database
    let userCreateQuery = `INSERT INTO users (username, password,  email) VALUES ('${newUser_username}', '${newUser_password}','${newUser_email}')`;

    //Insert Data into Database
    connection.query(userCreateQuery, (err, result) => {

        if (err) throw(err);
    res.render("createUser");

    })
    connection.end();
}