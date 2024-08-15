const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: {type: String, required : true},
    desc: String
}, {timestamps:true});

const Todo = mongoose.model("todo", todoSchema) // Creating a todo model

module.exports = Todo;