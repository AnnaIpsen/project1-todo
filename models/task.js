const mongoose = require("mongoose")
const {mongo} = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {type: String, required:true},
    taskDescription: {type: String, required: true}
});

// taskSchema.virtual("url").get(function(){
//     return '/index/task/${this.taskID}';
// })

module.exports = mongoose.model("Task", taskSchema);