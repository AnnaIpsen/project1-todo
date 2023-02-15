var express = require('express');
var router = express.Router();
let mysql = require('mysql');

//Controllers
const task_controller = require("../controller/taskController.js");


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



// GET request for creating a task. NOTE This must come before routes that display task (uses id).
router.get("/task/create", task_controller.task_create_get);

// POST request for creating task.
router.post("/task/create", task_controller.task_create_post);

// GET request to delete task.
router.get("/task/:id/delete", task_controller.task_delete_get);

// POST request to delete task.
router.post("/task/:id/delete", task_controller.task_delete_post);

// GET request to update task.
router.get("/task/:id/update", task_controller.task_update_get);

// POST request to update task.
router.post("/task/:id/update", task_controller.task_update_post);

// GET request for one task.
router.get("/task/:id", task_controller.task_detail);

// GET request for list of all task items.
router.get("/task", task_controller.task_list);

//NEW TASK - Trigger task_create_post


module.exports = router;
