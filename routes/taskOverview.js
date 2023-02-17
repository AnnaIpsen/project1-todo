var express = require('express');
var router = express.Router();
let mysql = require('mysql');

//Controllers
const task_controller = require("../controller/taskController.js");


/* GET home page. */
router.get('/taskOverview', task_controller.task_list, function(req, res, next) {
  res.render('taskOverview', { title: 'TurTur-do' });
});


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
router.get("/task/id", task_controller.task_details, function(err,results){
  results.render("taskOverview");
});

// GET request for list of all task items.
router.get("/", task_controller.task_list);




module.exports = router;
