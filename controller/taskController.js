const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME
});

// Display list of all tasks.
exports.task_list = (req, res) => {
    connection.connect();
    console.log("Fetching data...");
    let queryTest = 'SELECT * FROM tasks'
    connection.query(queryTest, (err, result) => {
        res.render("index", {task_list: result})
    })
    connection.end();
}


// Display detail page for a specific task.
exports.task_detail = (req, res) => {

};


// Handle task create on POST.
exports.task_create_post = (req, res) => {
    console.log(req.body)
    //Variables to hold body properties
    // const newTask_TaskName = req.body.TaskName;
    // const newTask_TaskDescription = req.body.password;
    // const newTask_TaskState = req.body.email;
    // const newTask_TaskPriority = req.body.email;
    //
    // //Make connection to Database
    // connection.connect();
    //
    // //Query to insert all user data into Database
    // let taskCreateQuery = `INSERT INTO tasks (TaskName, TaskDescription,  TaskState, TaskPriority) VALUES ('${newTask_TaskName}', '${newTask_TaskDescription}','${newTask_TaskState}', '${newTask_TaskPriority}')`;
    //
    // //Insert Data into Databaes
    // connection.query(userCreateQuery, (err, result) => {
    //
    //     if (err) throw(err);
    //     res.render("createUser");
    //
    // })
    // connection.end();
};

// Display task delete form on GET.
exports.task_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: task delete GET");
};

// Handle task delete on POST.
exports.task_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: task delete POST");
};

// Display task update form on GET.
exports.task_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: task update GET");
};

// Handle task update on POST.
exports.task_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: task update POST");
};

// const task = new Task({
//     taskName: req.body.TaskName,
//     taskDescription: req.body.TaskDescription
// })

