var express = require('express');
var router = express.Router();
let mysql = require('mysql');

//Elements from DOM
let ulDom = document.getElementById("tasklistUL");

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DBNAME
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TurTur-do' });
});

router.get('/getTasks', function(req,res, next){
  connection.connect();
  console.log("Fetching data...");
  let queryTest = 'SELECT * FROM tasks'
  connection.query(queryTest, (err, result) => {
    console.log(result);
    for(let i = 0; i < result.length; i++){
      let liEl = document.createElement("li");
      liEl.appendChild(document.createTextNode(result[0]));
      ulDom.appendChild(liEl);

    }
  })
  connection.end();
  res.render('index')
});

module.exports = router;
