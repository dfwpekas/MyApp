const Todo = require("../models/Todo");
const moment = require("moment");


const homeController = async(req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({createdAt: -1}); // will get documents 
        res.locals.moment = moment
        res.render("index", {title: "Todo List || Application", todos});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addTodoFormController = (req, res) => {
    try {
        res.render("newTodo", {title: "New todo"});
    } catch (error) {
        res.status(500).json
        ({message: error.message})
    }
};

const updateTodoFormController = async(req, res, next) => {
    try {
        const {id} = req.query;
        const todo = await Todo.findById(id); // single doument.
        res.render("updateTodo", {title: "UPDATE todo", todo});
    } catch (error) {
        res.status(500).json
        ({message: error.message});
    }
};

const deleteTodoPageController = (req, res) => {
    try {
        const {id} = req.query;
        res.render("deleteTodo", {title: "Delete Todo", id});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addTodoController = async(req, res, next) => {
    try {
        const {title, desc} = req.body;
        if(!title){
            return res.status(400).json({message: "Title is required"});
        }
        const newTodo = new Todo({title, desc}); // will create a document 
        await newTodo.save();
        res.redirect("/")

    } catch (error) {
        console.log("Error Message!")
    }
}

const updateTodoController = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {title, desc} = req.body;
        const todo = await Todo.findById(id);

        if (!todo){
            return res.status(404).json({message: "Todo not found"});
        }

        // Coming from the frontend, attached to the one in the database.
        todo.title = title
        todo.desc = desc

        await todo.save();
        res.redirect("/");
        } catch (error) {
            res.status(500).json({ErrorMessage: error.message})
    }
}

const deleteTodoController = async(req, res, next) => {
    try {
        const {id, confirm} = req.query

        if(confirm === "yes") {
            await Todo.findByIdAndDelete(id)
        }

        res.redirect("/")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = {homeController, addTodoFormController, updateTodoFormController, deleteTodoPageController, addTodoController, updateTodoController, deleteTodoController};